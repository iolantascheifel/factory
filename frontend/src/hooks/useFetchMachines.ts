import { useState, useEffect, useCallback } from "react";
import { useAccount, useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { protectedApi } from "../azure-ad-config";
import { Machine } from "../types/Machine";

/**
 * Custom hook to fetch a list of machines from the API.
 * It manages the loading and error states.
 */
export const useFetchMachines = () => {
  // The fix is here: explicitly type the state as an array of Machines
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use MSAL hooks to get the authentication instance and account
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0]);

  const fetchMachines = useCallback(async () => {
    let accessTokenResponse;
    try {
      setLoading(true);
      setError(null);

      // 1. Attempt to get token silently (preferred method)
      accessTokenResponse = await instance.acquireTokenSilent({
        scopes: protectedApi.scopes,
        account: account!,
      });
    } catch (e) {
      // 2. If silent acquisition fails (often due to missing consent or expired token),
      // we check for InteractionRequiredAuthError and fall back to interactive redirect.
      if (e instanceof InteractionRequiredAuthError) {
        // This will redirect the user to the login screen to resolve the issue (e.g., consent)
        instance.acquireTokenRedirect({
          scopes: protectedApi.scopes,
          account: account!,
        });
        // Execution stops here as the browser redirects
        return;
      }

      // If it's another type of error, set the error state
      // @ts-ignore
      setError(e.message);
      setLoading(false);
      console.error("Failed to acquire token:", e);
      return;
    }

    // Continue with the fetch only if a token was successfully acquired (either silently or after redirect)
    try {
      // Include the access token in the Authorization header
      const response = await fetch(protectedApi.endpoint, {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Machine[] = await response.json();
      setMachines(data);
    } catch (e) {
      // @ts-ignore
      setError(e.message);
      console.error("Failed to fetch machines:", e);
    } finally {
      setLoading(false);
    }
  }, [instance, account]); // Dependencies for useCallback

  useEffect(() => {
    if (account) {
      fetchMachines();
    }
  }, [fetchMachines, account]); // Dependencies for useEffect

  return { machines, loading, error, fetchMachines };
};

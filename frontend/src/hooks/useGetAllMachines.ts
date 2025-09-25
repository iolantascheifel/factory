import { useState, useEffect, useCallback } from "react";

const API_BASE_URL = "http://localhost:5206/api/machines";

export const useGetAllMachines = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMachines = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMachines(data);
      setError(null);
    } catch (e) {
      // @ts-ignore
      setError(e.message);
      console.error("Failed to fetch machines:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMachines();
  }, [fetchMachines]);

  return { machines, loading, error, fetchMachines };
};

// This file stores the configuration for your Azure AD application.
// In a real-world application, these values would be managed via environment variables
// during the build process to keep them secure.

export const msalConfig = {
  auth: {
    // This is your FRONTEND app's Application (client) ID
    clientId: "b50a2ff3-fbe9-42f6-986d-ccb4ff75ad5b",

    // The instance and tenant ID for your Azure AD tenant
    authority:
      "https://login.microsoftonline.com/d5ac8b76-7207-4be5-98a1-33b2dedaa754",

    // The redirect URI where Azure AD will send the user back after login.
    redirectUri: "http://localhost:3000",
  },
};

export const protectedApi = {
  // This should match the "Application ID URI" you set in the "Expose an API" blade
  // of your FactoryMonitor-API app registration in Azure.
  scopes: ["api://c8b07897-95de-46d9-8b48-286f1d2426af/access_as_user"],
  endpoint: "http://localhost:5206/api/machines",
};

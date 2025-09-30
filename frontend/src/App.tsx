import React from "react";
import "./App.css";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import WorkerView from "./worker/WorkerView";
import SupervisorView from "./supervisor/SupervisorView";
import { useFetchMachines } from "./hooks/useFetchMachines";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { msalConfig } from "./azure-ad-config";

const queryClient = new QueryClient();
const msalInstance = new PublicClientApplication(msalConfig);

const AppWithAuth = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { machines, loading, error } = useFetchMachines();
  const [userRole, setUserRole] = React.useState<
    "worker" | "supervisor" | null
  >(null);

  // A simple way to get a user's role based on their email.
  // In a real app, this would come from a secure token claim.
  React.useEffect(() => {
    if (isAuthenticated) {
      const account = instance.getActiveAccount();
      const email = account?.username?.toLowerCase();
      if (email === "iolanta.scheifel@gmail.com") {
        setUserRole("supervisor");
      } else {
        setUserRole("worker");
      }
    }
  }, [isAuthenticated, instance]);

  const handleLogin = () => {
    instance.loginRedirect();
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  if (!isAuthenticated) {
    return (
      <Box p={8} textAlign="center">
        <Heading mb={4}>Factory Login</Heading>
        <Button onClick={handleLogin} colorScheme="blue">
          Login with Microsoft
        </Button>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box p={8} textAlign="center">
        <Spinner size="xl" />
        <Text>Loading machines...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={8}>
        <Text>Error: {error}</Text>
      </Box>
    );
  }

  const renderView = () => {
    switch (userRole) {
      case "worker":
        return <WorkerView machines={machines} />;
      case "supervisor":
        return <SupervisorView machines={machines} />;
      default:
        return <Text>Determining your role...</Text>;
    }
  };

  return (
    <Box p={8}>
      <Heading mb={4}>LEGO Factory</Heading>
      <Text mt={4}>
        Logged in as: {instance.getActiveAccount()?.username} ({userRole})
      </Text>
      <Button onClick={handleLogout} mt={2}>
        Logout
      </Button>
      {renderView()}
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <AppWithAuth />
      </QueryClientProvider>
    </MsalProvider>
  );
};

export default App;

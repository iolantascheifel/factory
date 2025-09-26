import { useState } from "react";
const API_BASE_URL = "http://localhost:5206/api/machines";

export const useUpdateMachine = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const updateMachine = async (
    machineId: string,
    updateDto: { newState: string; newOrder: string },
  ) => {
    setIsUpdating(true);
    setUpdateError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/${machineId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDto),
      });

      if (response.status !== 204) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (e) {
      // @ts-ignore
      setUpdateError(e.message);
      console.error("Failed to update machine:", e);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateMachine, isUpdating, updateError };
};

import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { useUserData } from "../Context/SHDNAUserContext";

const useSHDNAKeychain = () => {
  const { setSessionToken } = useUserData();

  const saveSessionToken = async (token: string) => {
    try {
      await SecureStore.setItemAsync("sessionToken", token);
      setSessionToken(token);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const getSessionTokenAsync = async () => {
    try {
      const token = await SecureStore.getItemAsync("sessionToken");
      if (token) {
        return token;
      }
      console.log("No token found");
      return null;
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  const getSessionToken = async (): Promise<string> => {
    const token = await getSessionTokenAsync();
    setSessionToken(token ?? "");
    return token ?? "";
  };

  const clearSessionToken = async () => {
    try {
      await SecureStore.deleteItemAsync("sessionToken");
      console.log("Token cleared successfully!");
    } catch (error) {
      console.error("Error clearing token:", error);
    }
  };

  return { getSessionToken, saveSessionToken, clearSessionToken };
};

export default useSHDNAKeychain;

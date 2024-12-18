import React, { createContext, useContext, useState } from "react";

interface UserContext {
  userId: string | null;
  sessionToken: string | null;
  setUserId: (value: string | null) => void;
  setSessionToken: (value: string) => void;
}

const UserContext = createContext<UserContext>({
  userId: null,
  sessionToken: "",
  setUserId: (value: string | null) => {},
  setSessionToken: (value: string) => {},
});

export const useUserData = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: any) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        userId,
        sessionToken,
        setUserId,
        setSessionToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

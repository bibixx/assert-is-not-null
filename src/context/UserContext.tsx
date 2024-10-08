import { assertIsNotNullish } from "@/utils";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export interface UserData {
  name: string;
}

interface UserContextType {
  userData: UserData | null;
  logIn: (userData: UserData) => void;
  logOut: () => void;
}
const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  assertIsNotNullish(
    context,
    "Cannot use useUserContext outside of UserContextProvider",
  );

  return context;
};

export const UserContextProvider = UserContext.Provider;

interface UserContextProviderProps {
  children: ReactNode;
}
export const UserContextWrapper = (props: UserContextProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const logIn = useCallback((userData: UserData) => {
    setUserData(userData);
  }, []);

  const logOut = useCallback(() => {
    setUserData(null);
  }, []);

  return (
    <UserContext.Provider value={{ userData, logIn, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

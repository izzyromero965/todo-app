import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const { user, isLoading } = useAuth0();

  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (!isLoading) {
      setCurrentUser(user);
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

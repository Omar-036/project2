/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useContent } from "./ContentContext";

const UsersContext = createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("http://loacalhost:5001/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  });

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error("Users context was used outside the UsersProvider");
  return context;
}

export { UsersProvider, useUsers };

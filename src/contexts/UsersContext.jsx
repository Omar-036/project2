/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const UsersContext = createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [recentActions, setRecentActions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getActions(username, password) {
    const user = users.filter(
      (user) => user.username === username && user.password === password
    )[0];

    setRecentActions(() => user.recentAction);
  }

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("http://localhost:5001/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ recentActions, getActions }}>
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error("Users context was used outside the UsersProvider");
  return context;
}

export { UsersProvider, useUsers };

/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';


const UsersContext = createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [recentActions, setRecentActions] = useState([]);

  function getActions(id) {
    const user = users.filter(user => user.id === id)[0];

    setRecentActions(user?.recentAction);
  }

  useEffect(() => {
    async function getUsers() {
      const res = await fetch('http://localhost:5001/users');
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, recentActions, getActions }}>
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error('Users context was used outside the UsersProvider');
  return context;
}

export { UsersProvider, useUsers };

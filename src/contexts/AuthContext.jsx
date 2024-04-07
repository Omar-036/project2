/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const AuthContext = createContext();

const initalState = {
  id: '',
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        id: action.payload.id,
      };
    case 'logout':
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error('Unknown action');
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, id }, dispatch] = useReducer(
    reducer,
    initalState
  );

  const [users, setUsers] = useState([]);

  function checkUser(email, password) {
    const user = users?.filter(
      user => user.email === email && user.password === password
    )[0];

    return { isExists: Boolean(user), user };
  }

  function login(email, password) {
    const { isExists, user } = checkUser(email, password);
    if (isExists) {
      dispatch({ type: 'login', payload: { user, id: user.id } });
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
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
    <AuthContext.Provider value={{ login, logout, isAuthenticated, user, id }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('Context was used outside auth provider.');
  return context;
}

export { AuthProvider, useAuth };

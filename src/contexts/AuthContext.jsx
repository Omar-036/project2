/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext();

const initalState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  errorMessege: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "register":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "fail":
      return { ...state, isAuthenticated: false, errorMessege: action.payload };
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, message }, dispatch] = useReducer(
    reducer,
    initalState
  );

  const [users, setUsers] = useState([]);

  async function signup(username, email, password) {
    try {
      const res = await fetch("http://localhost:3000/api/users/registet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      // console.log(data.message)

      if (data.status === "success") {
        dispatch({ type: "register", payload: data.data.user });
      } else {
        alert(data.message);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function login(email, password) {
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // console.log(data?.data?.user);

      if (data?.status === "success") {
        dispatch({ type: "login", payload: data?.data?.user });
      } else {
        alert(data.message);
        dispatch({ type: "fail", payload: data.message });
      }
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  /*

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
	*/

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("http://localhost:5001/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, login, logout, isAuthenticated, user, users, message }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside auth provider.");
  return context;
}

export { AuthProvider, useAuth };

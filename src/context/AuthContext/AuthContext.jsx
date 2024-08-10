import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password, addAlert }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      const { id, password: _, ...safeUserData } = user;

      localStorage.setItem("@duckmovies:user", JSON.stringify(safeUserData));
      localStorage.setItem("@duckmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user: safeUserData, token });
    } catch (err) {
      const apiResponse = err.response.data.message;
      addAlert("error", apiResponse);
      return;
    }
  }

  function signOut() {
    localStorage.removeItem("@duckmovies:user");
    localStorage.removeItem("@duckmovies:token");

    api.defaults.headers.authorization = null;

    setData({});
}

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@duckmovies:user"));
    const token = localStorage.getItem("@duckmovies:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
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

      setData({ user, token });
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

  async function updateProfile({ user, avatarFile, addAlert }) {
    if (!user.name || !user.email) {
      addAlert("error", "Nome e e-mail são obrigatórios.");
      return;
    }

    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@duckmovies:user", JSON.stringify(user));

      setData({ user, token: data.token });
      if (user.old_password && !user.password)
        addAlert("info", "Senha atual ignorada.");
      addAlert("success", "Perfil atualizado com sucesso");
    } catch (err) {
      const apiResponse = err.response.data.message;
      addAlert("error", apiResponse);
      return;
    }
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
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

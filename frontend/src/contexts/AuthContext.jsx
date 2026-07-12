import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, getProfile } from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      setLoading(true);

      const response = await getProfile();

      setUser(response.data.data);

      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);

      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const loginUser = async (formData) => {
    await login(formData);

    const response = await getProfile();

    const loggedInUser = response.data.data;

    setUser(loggedInUser);

    setIsAuthenticated(true);

    return loggedInUser;
  };

  const logoutUser = async () => {
    try {
      await logout();
    } finally {
      setUser(null);

      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        isAuthenticated,
        loginUser,
        logoutUser,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

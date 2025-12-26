import { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;
  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setUser(data[0]);
      } else {
        setUser(jwtDecode(token)); 
      }
    } catch (error) {
      console.error(error);
      setUser(jwtDecode(token));
    }
  };
  fetchUser();
}, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    const decoded = jwtDecode(data.token);
    setUser(data.user||decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

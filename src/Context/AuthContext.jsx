import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AuthContext = React.createContext();
const baseUrl = import.meta.env.VITE_BASE_URL;
const AuthProvider = ({ children }) => {
  const [registeringAdmin, setRegisteringAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorss, setError] = useState(false);
  const [loginAdmin, setLoginAdmin] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const registerUser = async (data) => {
    setRegisteringAdmin(true);
    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      toast.error(response.message || "Something went wrong");
      if (response.status === "success") {
        toast.success(response.message);
        navigate("/admin-login");
      }
      console.log(response);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setRegisteringAdmin(false);
    }
  };

  const adminLogin = async (data) => {
    setLoginAdmin(true);
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.json();
      if (response.status === "success") {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        navigate("/admin-dashboard");
      } else if (response.status === "error") {
        setError(response.message);
      } else if (!res.ok) {
        setError(response.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoginAdmin(false);
    }
  };

  const isAuthenticated = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    try {
      const res = await fetch(`${baseUrl}/auth/verify-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      setAdminData(response.user);
      if (response.status === "success") {
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Session expired. Please log in again.");
      return false;
    }
  };
  const value = {
    registerUser,
    handleConfirmPassword,
    handlePassword,
    adminLogin,
    isAuthenticated,
    registeringAdmin,
    showConfirmPassword,
    showPassword,
    loginAdmin,
    adminData,
    errorss,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

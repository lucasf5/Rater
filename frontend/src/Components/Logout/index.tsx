import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../contexts/store";
import { LogoutButton } from "./styles";

const Logout: React.FC = () => {
  const { setUserLogged } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUserLogged(false);
    navigate("/login");
  };

  return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>;
};

export default Logout;

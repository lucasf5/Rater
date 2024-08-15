import React from "react";
import { Navigate } from "react-router-dom";
import useStore from "../../contexts/store";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { userLogged } = useStore();

  if (!userLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

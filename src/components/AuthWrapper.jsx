import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AuthWrapper = ({ children }) => {
  const authStatus = useSelector((store) => store.authReducer.auth);
  const location = useLocation()
  if (authStatus) {
    return children
  }
  return <Navigate to="/login" replace={true} state={location} />;
};

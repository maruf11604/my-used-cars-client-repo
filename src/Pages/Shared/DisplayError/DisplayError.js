import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };
  return (
    <div>
      <p className="text-error">Something is wrong</p>
      <p>{error.statusText || error.message}</p>
      <button onClick={handleLogOut}>SignOut</button>
    </div>
  );
};

export default DisplayError;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import useAdmin from "../../hooks/useAdmin";
import { signOut } from "firebase/auth";

const RequiredAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  // Loading
  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAdmin;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));

  if (!TOKEN) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;

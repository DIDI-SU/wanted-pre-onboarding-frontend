import { Route, Routes } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import MainToDo from "../Pages/MainToDo/MainToDo";
import Main from "../Pages/Main/Main";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <MainToDo />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default AppRouter;

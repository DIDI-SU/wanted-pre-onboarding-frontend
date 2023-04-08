import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import MainToDo from "../MainToDo/MainToDo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<MainToDo />} />
    </Routes>
  );
};

export default AppRouter;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import MainToDo from "../Pages/MainToDo/MainToDo";
import TokenProvider from "../Context/TokenContext/TokenContext";

const AppRouter = () => {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<MainToDo />} />
      </Routes>
    </TokenProvider>
  );
};

export default AppRouter;

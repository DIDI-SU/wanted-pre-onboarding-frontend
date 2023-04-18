import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/button/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginSiginUp from "../../Components/UI/LoginSiginUp/LoginSiginUp";

const url = "https://www.pre-onboarding-selection-task.shop/";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const checkInput = (value, name) => {
    if ((name === "email") & value.includes("@")) {
      setEmail(value);
    } else if ((name === "password") & (value.length >= 8)) {
      setPassword(value);
    }
  };
  const handleValue = (e) => {
    const { name, value } = e.target;
    checkInput(value, name);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(url + "auth/signin", {
        email: email,
        password: password,
      });
      window.localStorage.setItem(
        "TOKEN",
        JSON.stringify(response.data.access_token)
      );
      nav("/todo");
    } catch (error) {
      if (error.response.data.statusCode === 401) {
        alert("비밀번호나 이메일을 확인해주세요");
      }
    }
  };

  return (
    <LoginSiginUp>
      <div className=" flex flex-col  items-center p-3">
        <Input
          testid="email-input"
          type="email"
          value={email}
          handleValue={handleValue}
          className=" p-2 my-2"
        />
        <Input
          testid="password-input"
          type="password"
          value={password}
          handleValue={handleValue}
          className=" p-2 "
        />
      </div>
      <Button
        className=" w-44 p-2 border-solid border-2 border-blue-950 rounded-md"
        testid="signin-button"
        title="로그인하기"
        onClick={handleSubmit}
      />

      <Button
        title={"회원가입하고 todo만들러가기"}
        className=" my-1 p-2 border-solid border-2 border-blue-950 rounded-md"
        onClick={() => nav("/signup")}
      />
    </LoginSiginUp>
  );
};

export default Login;

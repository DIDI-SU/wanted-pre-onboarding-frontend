import React, { useState, useEffect } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/button/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginSiginUp from "../../Components/UI/LoginSiginUp/LoginSiginUp";

const url = "https://www.pre-onboarding-selection-task.shop/";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const nav = useNavigate();

  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (email.includes("@")) {
      const timeout = setTimeout(() => setEmailVal(true), 1000);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setEmailVal(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 8) {
      const timeout = setTimeout(() => setPasswordVal(true), 1000);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPasswordVal(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [password]);

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
        testid="signin-button"
        title="로그인하기"
        onClick={handleSubmit}
        className={`my-1 p-2 border-solid border-2 border-blue-950 rounded-md`}
        isDisabled={emailVal & passwordVal ? "" : "disabled"}
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

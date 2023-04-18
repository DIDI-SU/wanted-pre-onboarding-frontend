import React, { useEffect, useState } from "react";
import Input from "../Components/Input/Input";
import Button from "../Components/button/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginSiginUp from "../Components/UI/LoginSiginUp/LoginSiginUp";
const url = "https://www.pre-onboarding-selection-task.shop/auth/signup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      response.status === 201 && nav("/signin");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
      alert(error.response.data.message);
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
  console.log(emailVal & passwordVal);

  return (
    <LoginSiginUp>
      <div className=" flex flex-col">
        <Input
          testid="email-input"
          type="email"
          handleValue={handleValue}
          className=" p-2 my-2"
        />
        <Input
          testid="password-input"
          type="password"
          handleValue={handleValue}
          className=" p-2 my-2"
        />
      </div>
      <Button
        testid="signup-button"
        title="회원가입하기"
        onClick={handleSubmit}
        className={`my-1 p-2 border-solid border-2 border-blue-950 rounded-md`}
        isDisabled={emailVal & passwordVal ? "" : "disabled"}
      />
    </LoginSiginUp>
  );
};

export default SignUp;

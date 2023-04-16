import React, { useState } from "react";
import Input from "../Components/Input/Input";
import Button from "../Components/button/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginSiginUp from "../Components/UI/LoginSiginUp/LoginSiginUp";
const url = "https://www.pre-onboarding-selection-task.shop/auth/signup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState("");
  const nav = useNavigate();

  const checkInput = (value, name) => {
    if ((name === "email") & value.includes("@")) {
      setEmail(value);
    } else if ((name === "password") & (value.length >= 8)) {
      setPassword(value);
    } else {
      setDisabled("disabled");
    }
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    checkInput(value, name);
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
        className={`my-1 p-2 border-solid border-2 border-blue-950 rounded-md ${disabled}`}
      />
    </LoginSiginUp>
  );
};

export default SignUp;

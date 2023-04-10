import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/button/button";
import axios from "axios";
const url = "https://www.pre-onboarding-selection-task.shop/";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className=" flex flex-col">
        <Input testid="email-input" type="email" handleValue={handleValue} />
        <Input
          testid="password-input"
          type="password"
          handleValue={handleValue}
        />
      </div>
      <Button
        testid="signin-button"
        title="로그인하기"
        onClick={handleSubmit}
      />
    </section>
  );
};

export default Login;

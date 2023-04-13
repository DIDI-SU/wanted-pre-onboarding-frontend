import React, { useContext, useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/button/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../Context/TokenContext/TokenContext";

const url = "https://www.pre-onboarding-selection-task.shop/";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userToken, setUserToken } = useContext(TokenContext);

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
      setUserToken(response.data);
    } catch (error) {
      if (error.response.data.statusCode === 401) {
        alert("비밀번호나 이메일을 확인해주세요");
      }
    }
  };

  useEffect(() => {
    window.localStorage.setItem("TOKEN", JSON.stringify(userToken));
  }, [userToken]);

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
      <Link to="/signup">회원가입하고 todo만들러가기</Link>
    </section>
  );
};

export default Login;

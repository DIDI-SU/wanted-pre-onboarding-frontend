import React from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/button/button";

const Login = () => {
  return (
    <section>
      <div className=" flex flex-col">
        <Input testid="email-input" type="email" />
        <Input testid="password-input" type="password" />
      </div>
      <Button testid="signin-button" title="로그인하기" />
    </section>
  );
};

export default Login;

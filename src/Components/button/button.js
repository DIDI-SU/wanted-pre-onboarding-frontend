import React from "react";

const Button = ({ testid, title }) => {
  return <button data-testid={testid}>{title}</button>;
};

export default Button;

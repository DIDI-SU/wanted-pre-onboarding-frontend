import React from "react";

const Input = ({ testid, value, type }) => {
  return <input data-testid={testid} value={value} type={type} />;
};

export default Input;

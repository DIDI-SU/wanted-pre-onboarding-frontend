import React from "react";

const Input = ({ testid, type, handleValue }) => {
  return (
    <input
      id={testid}
      data-testid={testid}
      name={type}
      type={type}
      onChange={(e) => {
        handleValue(e);
      }}
    />
  );
};

export default Input;

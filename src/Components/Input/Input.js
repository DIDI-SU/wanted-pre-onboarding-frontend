import React from "react";

const Input = ({ testid, type, handleValue, className }) => {
  return (
    <input
      className={className}
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

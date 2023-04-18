import React from "react";

const Input = ({ testid, type, handleValue, className, value }) => {
  return (
    <input
      className={className}
      id={testid}
      data-testid={testid}
      name={type}
      type={type}
      value={value}
      onChange={(e) => {
        handleValue(e);
      }}
    />
  );
};

export default Input;

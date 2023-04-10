import React from "react";

const Button = ({ testid, title, onClick }) => {
  return (
    <button
      data-testid={testid}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;

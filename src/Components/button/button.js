import React from "react";

const Button = ({ testid, title, onClick, className }) => {
  return (
    <button
      className={("border-solid border-2", className)}
      data-testid={testid}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {title}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ data, handleSubmit }) => {
  const { type, content, className } = data;
  return (
    <button
      id="button"
      type={type}
      className={className}
      onClick={(e) => {
        handleSubmit(e);
      }}
    >
      {content}
    </button>
  );
};

export default Button;

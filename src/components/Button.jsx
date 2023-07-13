import React from "react";

const Button = ({ color, title, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

import React from "react";
import styled from "styled-components";

const Button = ({ color, title, onClick }) => {
  return (
    <StyledButton style={{ backgroundColor: color }} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: orange;
  color: white;
  border-radius: 15px;
  width: 100px;
  height: 25px;
  border: none;
`;
export default Button;

import React from "react";
import styled from "styled-components";

const Input = ({
  title,
  labelClassName,
  inputType = "text",
  value,
  checked = false,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <StyledInput
      id={className}
      placeholder={placeholder}
      checked={checked}
      className={className}
      type={inputType}
      min={1}
      max={5}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 5vh;
  outline: none;
  border: 0.5px solid #cccccc;
  padding: 2px;

  &:active,
  &:focus {
    background-color: #fff1c4;
  }
`;

export default Input;

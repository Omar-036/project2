import React from "react";
import styled from "styled-components";

const Root = styled.button`
  margin-right: 8px;

  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
    box-shadow: 0 1px #333;
    transform: translateY(1px);
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <Root
      className="bg-dimBlue text-white tracking-wider rounded"
      onClick={onClick}
    >
      {children}
    </Root>
  );
};

export default Button;

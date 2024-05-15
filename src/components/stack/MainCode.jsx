import React from "react";
import styled, { keyframes } from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  position: relative;
  border: 2px solid gray;
  border-top: none;
  padding: 8px;
  width: 100%;
  min-height: 500px;
  @media (min-height: 820px) and (max-height: 900px) {
    min-height: 450px;
  }
  @media (min-height: 760px) and (max-height: 820px) {
    min-height: 400px;
  }
  @media (min-height: 680px) and (max-height: 760px) {
    min-height: 350px;
  }
  @media (max-height: 680px) {
    min-height: 300px;
  }
`;

const pushAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(0);    
  }
`;

const popAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  90% {
    opacity: 0;
  }

  100% {
    transform: translateY(-100px);
    display: none;
  }
`;

const Item = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  background-color: hotpink;
  border: 1px solid black;
  line-height: 24px;
  margin-top: 4px;
  padding: 4px;
  text-align: center;
  animation-name: ${(props) => (props.done ? popAnimation : pushAnimation)};
  animation-timing-function: ease-out;
  animation-duration: 0.5s;
`;

const Label = styled.label`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

function MainCode({ commands = [] }) {
  return (
    <Root className="min-w-80 w-full max-w-96">
      {!commands.length && <Label>EMPTY!</Label>}
      {commands.map((command, index) => (
        <Item key={index} done={command.done}>
          {command.label}
        </Item>
      ))}
    </Root>
  );
}

export default MainCode;

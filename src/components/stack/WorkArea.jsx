import React from "react";
import styled from "styled-components";
import CallStack from "./call-stack";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

function App() {
  return (
    <Root className="container mx-auto p-8 tracking-wider">
      <Title className="mt-16 mb-8">Stack Visualization</Title>
      <CallStack />
    </Root>
  );
}

export default App;

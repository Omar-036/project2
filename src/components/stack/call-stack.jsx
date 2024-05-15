import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import MainCode from "./MainCode";
import CodeTracing from "./CodeTracing";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Title = styled.label`
  margin-bottom: 16px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const Input = styled.input``;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 400px;
`;

const Buttons = styled.div`
  display: flex;

  width: 100%;
`;

function CallStack() {
  const [commands, setCommands] = useState([]);
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmptyMessage, setIsEmptyMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [operation, setOperation] = useState("");

  const handleCommandChange = (event) => {
    setValue(event.target.value);
  };

  const handleCommandKeyDown = (event) => {
    if (event.key === "Enter") {
      handlePush();
    }
  };

  const handlePush = () => {
    if (!value) {
      setIsEmptyMessage(
        "please enter your value inside the box to push it into stack"
      );
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      return;
    }

    const nextCommand = {
      label: value,
      done: false,
    };

    setCommands([...commands, nextCommand]);
    setOperation("push");
    setValue("");
  };

  const handlePop = () => {
    if (!commands.length) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
      setIsEmptyMessage("no element to pop it");
      return;
    }

    const lastCommand = commands[commands.length - 1];
    lastCommand.done = true;

    setCommands([...commands.slice(0, commands.length - 1), lastCommand]);

    setTimeout(() => {
      // remove done command
      setCommands([...commands.slice(0, commands.length - 1)]);
    }, 250);
    setOperation("pop");
  };

  const handleRestart = () => {
    setCommands([]);
  };

  const handleEmpty = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);

    if (commands.length === 0) {
      setIsEmpty(true);
      setIsEmptyMessage("yes, is empty");
    } else {
      setIsEmpty(false);
      setIsEmptyMessage("no, is not empty");
    }
    return;
  };
  const handlePeek = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    if (commands.length == 0) {
      setIsEmptyMessage(`The Stack is Empty`);
    } else {
      setIsEmptyMessage(
        `The top of stack is ${commands[commands.length - 1].label}`
      );
    }
    return;
  };
  const handleSize = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    setIsEmptyMessage(`The size of stack ${commands.length}`);

    return;
  };

  return (
    <Root className="flex flex-row gap-8 justify-between">
      <Controls className="self-start">
        <Title>Enter the value to push it</Title>
        <Input
          className="w-full p-2 border-4 border-gray-900  bg-dimBlue duration-300 rounded"
          onChange={handleCommandChange}
          onKeyDown={handleCommandKeyDown}
          value={value}
        />
        <Buttons className="flex-wrap my-6 gap-y-4">
          <Button onClick={handlePush}>Push</Button>
          <Button onClick={handlePop}>Pop</Button>
          <Button onClick={handleRestart}>Restart</Button>
          <Button onClick={handlePeek}>Peek</Button>
          <Button onClick={handleSize}>Size</Button>
          <Button onClick={handleEmpty}>isEmpty?</Button>
        </Buttons>
        {showMessage && (
          <p className={`"message text-lg text-gray-500 self-start  `}>
            {isEmptyMessage}
          </p>
        )}
      </Controls>
      <MainCode commands={commands} />
      <CodeTracing operation={operation} />
    </Root>
  );
}

export default CallStack;

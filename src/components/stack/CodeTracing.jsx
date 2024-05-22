import React, { useEffect, useState } from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

const CodeTracing = ({ operation }) => {
  // State to track the index of the current p tag
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setCurrentIndex(0);
    // Set data based on the operation prop
    switch (operation) {
      case "push":
        setData([
          "Checks if the stack is full.",
          "If the stack is full, produces an error and exit.",
          "If the stack is not full, increments top to point next empty space.",
          "Adds data element to the stack location, where top is pointing.",
          "Returns success.",
        ]);
        break;
      case "pop":
        setData([
          "1. Checks if the stack is empty.",
          "2. If the stack is empty, produces an error and exit.",
          "3. If the stack is not empty, accesses the data element at which top is pointing.",
          "4. Decreases the value of top by 1.",
          "5. Returns success.",
        ]);
        break;
      default:
        setData([]);
    }
  }, [operation]);

  useEffect(() => {
    if (currentIndex < data.length) {
      // Set up an interval to change the currentIndex every second
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1500);

      // Clear the interval on component unmount or when data changes
      return () => clearInterval(interval);
    }
  }, [currentIndex, data]);

  return (
    <div className="w-96">
      {data.map((item, index) => (
        <p
          className="p-2 rounded"
          key={index}
          style={{
            backgroundColor: currentIndex === index ? "gold" : "transparent",
            color: currentIndex === index ? "black" : "white",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default CodeTracing;

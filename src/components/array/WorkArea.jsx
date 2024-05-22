import React, { useState } from "react";
import "./array.css";

const WorkArea = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");

  // Function to add a value to the array
  const addValue = () => {
    if (!inputValue || isNaN(inputValue)) {
      alert("Please enter a valid numeric value.");
      return;
    }
    const value = parseInt(inputValue);
    setArray([...array, value]);
    setInputValue("");
  };

  // Function to remove a value from the array
  const removeValue = () => {
    if (array.length === 0) {
      alert("Array is empty.");
      return;
    }
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };

  // Function to access a value at a specific index
  const accessValue = () => {
    if (!indexValue || isNaN(indexValue)) {
      alert("Please enter a valid index.");
      return;
    }
    const index = parseInt(indexValue);
    if (index < 0 || index >= array.length) {
      alert("Index out of bounds.");
      return;
    }
    alert(`Value at index ${index} is ${array[index]}`);
    setIndexValue("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl my-12 mb-16">Array Visualizer</h1>
      <div className="array-container my-12">
        {array.map((value, index) => (
          <div key={index} className="array-item">
            {value}
          </div>
        ))}
      </div>
      <div className="input-group text-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="input"
        />
        <button onClick={addValue} className="button add-button">
          Add Value
        </button>
        <button onClick={removeValue} className="button remove-button">
          Remove Value
        </button>
      </div>
      <div className="input-group text-center">
        <input
          type="text"
          value={indexValue}
          onChange={(e) => setIndexValue(e.target.value)}
          placeholder="Enter index"
          className="input"
        />
        <button onClick={accessValue} className="button access-button">
          Access Value
        </button>
      </div>
    </div>
  );
};

export default WorkArea;

import React from "react";

class StackDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Stack Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16   ">
          A stack is a data structure that follows the Last In, First Out (LIFO)
          principle. This means that the last element added to the stack will be
          the first one to be removed. Think of it like a stack of plates: you
          can only add or remove plates from the top of the stack.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className=" leading-10 pl-4 text-md mb-1">
              <strong>Push:</strong> Add an element to the top of the stack.
            </li>
            <li className=" leading-10 pl-4 text-md mb-1">
              <strong>Pop:</strong> Remove the top element from the stack.
            </li>
            <li className=" leading-10 pl-4 text-md mb-1">
              <strong>Peek:</strong> View the top element of the stack without
              removing it.
            </li>
            <li className=" leading-10 pl-4 text-md mb-1">
              <strong>isEmpty:</strong> Check if the stack is empty.
            </li>
            <li className=" leading-10 pl-4 text-md mb-1">
              <strong>Size:</strong> Get the number of elements in the stack.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite  p-4 py-12 rounded-md overflow-auto">
            {`
            // Create a new stack
            let stack = [];

            // Push elements onto the stack
            stack.push(5);
            stack.push(10);
            stack.push(15);
            // [15, 10, 5]

            // Pop an element from the stack
            let removedElement = stack.pop(); // removedElement === 15
            // [10, 5]

            // Peek at the top element of the stack
            let topElement = stack[stack.length - 1]; // topElement === 10

            // Check if the stack is empty
            let isEmpty = stack.length === 0; // isEmpty === false

            // Get the size of the stack
            let size = stack.length; // size === 2
            `}
          </pre>
          <div>
            <img className=" w-full h-[500px]" src="../../stack.gif" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default StackDescription;

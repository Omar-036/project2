import React from "react";

class QueueDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Queue Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16">
          A queue is a data structure that follows the First In, First Out
          (FIFO) principle. This means that the first element added to the queue
          will be the first one to be removed. Think of it like a line of
          people: you can only add people to the end of the line and remove them
          from the front.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Enqueue:</strong> Add an element to the end of the queue.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Dequeue:</strong> Remove the front element from the queue.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Front:</strong> View the front element of the queue
              without removing it.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>isEmpty:</strong> Check if the queue is empty.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Size:</strong> Get the number of elements in the queue.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite p-4 py-12 rounded-md overflow-auto">
            {`
            // Create a new queue
            let queue = [];

            // Enqueue elements into the queue
            queue.push(5);
            queue.push(10);
            queue.push(15);
            // [5, 10, 15]

            // Dequeue an element from the queue
            let removedElement = queue.shift(); // removedElement === 5
            // [10, 15]

            // View the front element of the queue
            let frontElement = queue[0]; // frontElement === 10

            // Check if the queue is empty
            let isEmpty = queue.length === 0; // isEmpty === false

            // Get the size of the queue
            let size = queue.length; // size === 2
            `}
          </pre>
          <div>
            <img className=" w-full h-[500px]" src="../../queue.gif" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default QueueDescription;

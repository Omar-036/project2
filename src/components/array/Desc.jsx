import React from "react";

class ArrayDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Array Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16">
          An array is a collection of elements stored at contiguous memory
          locations, allowing efficient indexing. Arrays are commonly used to
          store multiple values in a single variable, and each element can be
          accessed using its index.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Access:</strong> Retrieve an element by its index.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Insertion:</strong> Add an element at a specific index.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Deletion:</strong> Remove an element from a specific
              index.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Traversal:</strong> Iterate through all elements in the
              array.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Size:</strong> Get the number of elements in the array.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite p-4 py-12 rounded-md overflow-auto">
            {`
            // Create a new array
            let array = [1, 2, 3];

            // Access elements in the array
            let firstElement = array[0]; // firstElement === 1
            let secondElement = array[1]; // secondElement === 2

            // Insert an element at the end of the array
            array.push(4); // array === [1, 2, 3, 4]

            // Delete the last element of the array
            let removedElement = array.pop(); // removedElement === 4
            // array === [1, 2, 3]

            // Traverse the array
            array.forEach(element => {
              console.log(element);
            });
            // Output: 1, 2, 3

            // Get the size of the array
            let size = array.length; // size === 3
            `}
          </pre>
          <div>
            <img
              className="w-full h-[500px]"
              src="../../array.jpg"
              alt="Array visualization"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ArrayDescription;

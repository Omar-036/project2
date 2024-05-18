import React, { useState, useEffect } from "react";
import "./linkedlist.css";
import CodeTracing from "./CodeTracing";

const WorkArea = () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        return true;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
        return true;
      }
      return false;
    }

    delete(value) {
      if (this.head === null) return false;
      if (this.head.value === value) {
        this.head = this.head.next;
        return true;
      }
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
        return true;
      }
      return false;
    }

    search(value) {
      let current = this.head;
      let steps = [];
      while (current !== null) {
        steps.push(`Check value ${current.value}`);
        if (current.value === value) {
          return { found: true, steps };
        }
        current = current.next;
      }
      return { found: false, steps };
    }

    toArray() {
      const elements = [];
      let current = this.head;
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
      return elements;
    }

    isFull() {
      let current = this.head;
      let count = 0;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count >= 3;
    }
  }

  const [linkedList] = useState(new LinkedList());
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [deleteValue, setDeleteValue] = useState("");
  const [elements, setElements] = useState(linkedList.toArray());
  const [tracing, setTracing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [operationResult, setOperationResult] = useState("");

  useEffect(() => {
    if (linkedList.head === null) {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);
      setElements(linkedList.toArray());
    }
  }, [linkedList]);

  const handleAddNode = () => {
    if (inputValue) {
      setTracing(true);
      setSteps([
        "Start append operation",
        "Create new node",
        "Check if head is null",
        "Find the last node",
        "Set next of last node to new node",
        "Finish append operation",
      ]);
      setCurrentStep(0);
    }
  };

  useEffect(() => {
    if (tracing && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (tracing && currentStep === steps.length) {
      const result = linkedList.append(Number(inputValue));
      if (result) {
        setElements([...linkedList.toArray()]);
        setInputValue("");
        setTracing(false);
        setOperationResult("Operation completed successfully.");
      } else {
        setOperationResult("Operation failed. Linked list is full.");
      }
    }
  }, [tracing, currentStep, steps.length, inputValue, linkedList]);

  const handleSearch = () => {
    if (searchValue !== "") {
      setTracing(true);
      const result = linkedList.search(Number(searchValue));
      setSteps(result.steps);
      setOperationResult(
        result.found
          ? `Value ${searchValue} found in the list.`
          : `Value ${searchValue} not found in the list.`
      );
      setCurrentStep(0);
    }
  };

  useEffect(() => {
    if (tracing && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (tracing && currentStep === steps.length) {
      setTracing(false);
    }
  }, [tracing, currentStep, steps.length]);

  const handleDelete = () => {
    if (deleteValue !== "") {
      const result = linkedList.delete(Number(deleteValue));
      if (result) {
        setElements([...linkedList.toArray()]);
        setOperationResult(`Value ${deleteValue} deleted successfully.`);
        setDeleteValue("");
      } else {
        setOperationResult(`Value ${deleteValue} not found in the list.`);
      }
    }
  };

  useEffect(() => {
    if (tracing && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (tracing && currentStep === steps.length) {
      setTracing(false);
    }
  }, [tracing, currentStep, steps.length]);

  return (
    <div className="text-center font-sans">
      <h1 className="text-2xl font-bold mb-4">Linked List Visualization</h1>
      <div className="flex justify-center items-center mb-4 animate-container">
        {elements.map((value, index) => (
          <div key={value} className="flex items-center mx-2 animate-fadeIn">
            <div className="px-4 py-2 bg-blue-500 text-white rounded">
              {value}
            </div>
            {index < elements.length - 1 && (
              <div className="mx-2 text-2xl">→</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value to add"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleAddNode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Node
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter
value to search"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={deleteValue}
          onChange={(e) => setDeleteValue(e.target.value)}
          placeholder="Enter value to delete"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      <div className="mt-4">
        {tracing && (
          <CodeTracing
            steps={steps}
            currentStep={currentStep}
            operationResult={operationResult}
          />
        )}
      </div>
    </div>
  );
};

export default WorkArea;

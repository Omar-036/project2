import React, { useState, useEffect } from "react";
import "./queue.css";
import CodeTracing from "./CodeTracing";

const WorkArea = () => {
  class Queue {
    constructor() {
      this.items = [];
    }

    enqueue(value) {
      this.items.push(value);
      return true;
    }

    dequeue() {
      if (this.items.length === 0) return false;
      this.items.shift();
      return true;
    }

    toArray() {
      return this.items;
    }
  }

  const [queue] = useState(new Queue());
  const [inputValue, setInputValue] = useState("");
  const [elements, setElements] = useState([]);
  const [tracing, setTracing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [operationResult, setOperationResult] = useState("");

  // Initialize the queue with sample values
  useEffect(() => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    setElements(queue.toArray());
  }, [queue]);

  const handleEnqueue = () => {
    if (inputValue) {
      setTracing(true);
      setSteps([
        "Start enqueue operation",
        "Add value to queue",
        "Finish enqueue operation",
      ]);
      setCurrentStep(0);
    }
  };

  useEffect(() => {
    if (tracing && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1500);

      return () => clearTimeout(timer);
    } else if (tracing && currentStep === steps.length) {
      const result = queue.enqueue(Number(inputValue));
      if (result) {
        setElements([...queue.toArray()]);
        setInputValue("");
        setTracing(false);
        setOperationResult("Enqueue operation completed successfully.");
      } else {
        setOperationResult("Enqueue operation failed.");
      }
    }
  }, [tracing, currentStep, steps.length, inputValue, queue]);

  const handleDequeue = () => {
    setTracing(true);
    setSteps([
      "Start dequeue operation",
      "Remove value from queue",
      "Finish dequeue operation",
    ]);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (tracing && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (tracing && currentStep === steps.length) {
      const result = queue.dequeue();
      if (result) {
        setElements([...queue.toArray()]);
        setTracing(false);
        setOperationResult("Dequeue operation completed successfully.");
      } else {
        setOperationResult("Dequeue operation failed.");
      }
    }
  }, [tracing, currentStep, steps.length, queue]);

  return (
    <div className="text-center font-sans">
      <h1 className="text-2xl font-bold mb-4">Queue Visualization</h1>
      <div className="flex justify-center items-center mb-4 animate-container flex-wrap">
        {elements.map((value, index) => (
          <div key={index} className="flex items-center mx-2 animate-fadeIn">
            <div className="px-4 py-2 bg-blue-500 text-white rounded">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value to enqueue"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleEnqueue}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Enqueue
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={handleDequeue}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Dequeue
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

// CodeTracing.js
import React from "react";

const CodeTracing = ({ steps, currentStep, operationResult }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Code Tracing</h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`p-2 my-1 ${
            index === currentStep ? "bg-yellow-200" : "bg-white"
          }`}
        >
          {step}
        </div>
      ))}
      {operationResult && <div className="mt-2">{operationResult}</div>}
    </div>
  );
};

export default CodeTracing;

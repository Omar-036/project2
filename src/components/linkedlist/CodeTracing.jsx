// CodeTracing.js
import React from "react";

const CodeTracing = ({ steps, currentStep, operationResult }) => {
  return (
    <div className="mt-4 p-4 bg-primary">
      <h2 className="text-xl font-bold mb-2 text-primary">Code Tracing</h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`p-2 my-1 ${
            index === currentStep ? "bg-yellow-500" : "bg-gray-900"
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

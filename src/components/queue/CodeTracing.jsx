import React from "react";

const CodeTracing = ({ steps, currentStep, operationResult }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Code Tracing</h2>
      <div className="bg-gray-100 p-4 rounded">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              index === currentStep ? "bg-yellow-300" : ""
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      {currentStep === steps.length && (
        <div className="mt-4 p-2 bg-green-200 rounded">{operationResult}</div>
      )}
    </div>
  );
};

export default CodeTracing;

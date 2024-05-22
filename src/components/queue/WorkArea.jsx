import React, { useState } from "react";
import "./queue.css";

const WorkArea = () => {
  const [queue, setQueue] = useState(["1", "2", "3"]);
  const [inputValue, setInputValue] = useState("");
  const [animationState, setAnimationState] = useState("");

  const enqueue = () => {
    if (inputValue) {
      setQueue([...queue, inputValue]);
      setInputValue("");
      setAnimationState("enqueue");
      setTimeout(() => setAnimationState(""), 500);
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setAnimationState("dequeue");
      setTimeout(() => {
        setQueue(queue.slice(1)); // Remove the first element (head) from the queue
        setAnimationState("");
      }, 500);
    }
  };

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-center text-4xl my-12">Queue Visualizer</h1>
      <div className="flex justify-center">
        {" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="input text-primary"
        />
        <button onClick={enqueue} className="button bg-blue-700 enqueue-button">
          Enqueue
        </button>
        <button onClick={dequeue} className="button dequeue-button">
          Dequeue
        </button>
      </div>
      <div className="mt-24 flex justify-center">
        <div className={`queue`}>
          {queue.length === 0 ? (
            <p className="empty-queue">The queue is empty.</p>
          ) : (
            queue.map((item, index) => (
              <div
                key={index}
                className={`queue-item bg-blue-700 ${
                  index === queue.length - 1 ? animationState : ""
                } ${index === 0 ? "head" : ""} ${
                  index === queue.length - 1 ? "tail" : ""
                }`}
              >
                {item}
                {index === 0 && <span className="label head">Head</span>}
                {index === queue.length - 1 && (
                  <span className="label tail">Tail</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkArea;

import React, { useState } from "react";
import "./doublyLinkedList.css";

const DoublyLinkedList = () => {
  const [list, setList] = useState([
    { value: "1", id: 1 },
    { value: "2", id: 2 },
    { value: "3", id: 3 },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [nodeToRemove, setNodeToRemove] = useState(null);

  const addToHead = () => {
    if (inputValue) {
      setIsAdding(true);
      setList([{ value: inputValue, id: Date.now() }, ...list]);
      setInputValue("");
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
    }
  };

  const addToTail = () => {
    if (inputValue) {
      setIsAdding(true);
      setList([...list, { value: inputValue, id: Date.now() }]);
      setInputValue("");
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
    }
  };

  const removeFromHead = () => {
    if (list.length > 0) {
      setIsRemoving(true);
      setNodeToRemove(list[0]);
      setTimeout(() => {
        setList(list.slice(1));
        setIsRemoving(false);
        setNodeToRemove(null);
      }, 500);
    }
  };

  const removeFromTail = () => {
    if (list.length > 0) {
      setIsRemoving(true);
      setNodeToRemove(list[list.length - 1]);
      setTimeout(() => {
        setList(list.slice(0, -1));
        setIsRemoving(false);
        setNodeToRemove(null);
      }, 500);
    }
  };

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-center text-4xl my-12">
        Doubly Linked List Visualizer
      </h1>
      <div className="button-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value "
          className="input text-primary"
        />
        <button onClick={addToHead} className="button add-head-button">
          Add to Head
        </button>
        <button onClick={addToTail} className="button add-tail-button">
          Add to Tail
        </button>
        <button onClick={removeFromHead} className="button remove-head-button">
          Remove from Head
        </button>
        <button onClick={removeFromTail} className="button remove-tail-button">
          Remove from Tail
        </button>
      </div>
      <div className="list-container mt-24">
        {/* <h2>List:</h2> */}
        <div className="list">
          {list.length === 0 ? (
            <p className="empty-list">The list is empty.</p>
          ) : (
            list.map((node, index) => (
              <React.Fragment key={node.id}>
                <div
                  className={`list-item bg-blue-700 ${
                    index === 0 ? "head" : ""
                  } ${index === list.length - 1 ? "tail" : ""}`}
                >
                  {/* {index > 0 && <span className="arrow left">&larr;</span>} */}
                  <span
                    className={`node-value ${
                      isAdding && node === list[0] ? "adding" : ""
                    } ${isRemoving && node === nodeToRemove ? "removing" : ""}`}
                  >
                    {node.value}
                  </span>
                  {/* {index < list.length - 1 && (
                    <span className="arrow right">&rarr;</span>
                  )} */}
                  {index === 0 && <span className="label head">Head</span>}
                  {index === list.length - 1 && (
                    <span className="label tail">Tail</span>
                  )}
                </div>
                {index < list.length - 1 && (
                  <div className="spacer">
                    <span className="arrow left">&larr;</span>
                    <span className="arrow right">&rarr;</span>
                  </div>
                )}
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DoublyLinkedList;

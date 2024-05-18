import React from "react";

class LinkedListDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Linked List Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16">
          A linked list is a linear data structure where elements are stored in
          nodes. Each node contains a data field and a reference (link) to the
          next node in the sequence.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Insert:</strong> Add an element to the list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Delete:</strong> Remove an element from the list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Search:</strong> Find an element in the list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Traverse:</strong> Visit each element in the list.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite  p-4 py-12 rounded-md overflow-auto">
            {`
            // Define Node class
            class Node {
              constructor(data) {
                this.data = data;
                this.next = null;
              }
            }

            // Define LinkedList class
            class LinkedList {
              constructor() {
                this.head = null;
              }

              // Insert operation
              insert(data) {
                const newNode = new Node(data);
                if (!this.head) {
                  this.head = newNode;
                } else {
                  let current = this.head;
                  while (current.next) {
                    current = current.next;
                  }
                  current.next = newNode;
                }
              }

              // Delete operation
              delete(data) {
                if (!this.head) return;
                if (this.head.data === data) {
                  this.head = this.head.next;
                } else {
                  let current = this.head;
                  while (current.next) {
                    if (current.next.data === data) {
                      current.next = current.next.next;
                      break;
                    }
                    current = current.next;
                  }
                }
              }

              // Search operation
              search(data) {
                let current = this.head;
                while (current) {
                  if (current.data === data) {
                    return true;
                  }
                  current = current.next;
                }
                return false;
              }

              // Traverse operation
              traverse() {
                let current = this.head;
                while (current) {
                  console.log(current.data);
                  current = current.next;
                }
              }
            }

            // Create a new linked list
            const linkedList = new LinkedList();

            // Insert elements into the list
            linkedList.insert(5);
            linkedList.insert(10);
            linkedList.insert(15);

            // Delete an element from the list
            linkedList.delete(10);

            // Search for an element in the list
            const isFound = linkedList.search(5); // isFound === true

            // Traverse the list
            linkedList.traverse();
            `}
          </pre>
          <div>
            <img
              className=" w-full h-[500px]"
              src="../../linked-list.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LinkedListDescription;

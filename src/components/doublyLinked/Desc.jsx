import React from "react";

class DoublyLinkedListDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Doubly Linked List Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16">
          A doubly linked list is a type of linked list in which each node
          contains a data part and two pointers: one to the previous node and
          one to the next node. This allows traversal of the list in both
          directions.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Append:</strong> Add an element to the end of the list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Prepend:</strong> Add an element to the beginning of the
              list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Remove:</strong> Remove a specified element from the list.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Front:</strong> View the front element of the list without
              removing it.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Back:</strong> View the last element of the list without
              removing it.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>isEmpty:</strong> Check if the list is empty.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Size:</strong> Get the number of elements in the list.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite p-4 py-12 rounded-md overflow-auto">
            {`
            // Define a node class for the doubly linked list
            class Node {
              constructor(data) {
                this.data = data;
                this.prev = null;
                this.next = null;
              }
            }

            // Define the doubly linked list class
            class DoublyLinkedList {
              constructor() {
                this.head = null;
                this.tail = null;
                this.size = 0;
              }

              // Append a node to the end
              append(data) {
                const newNode = new Node(data);
                if (!this.head) {
                  this.head = newNode;
                  this.tail = newNode;
                } else {
                  this.tail.next = newNode;
                  newNode.prev = this.tail;
                  this.tail = newNode;
                }
                this.size++;
              }

              // Prepend a node to the beginning
              prepend(data) {
                const newNode = new Node(data);
                if (!this.head) {
                  this.head = newNode;
                  this.tail = newNode;
                } else {
                  newNode.next = this.head;
                  this.head.prev = newNode;
                  this.head = newNode;
                }
                this.size++;
              }

              // Remove a node
              remove(data) {
                let current = this.head;
                while (current) {
                  if (current.data === data) {
                    if (current.prev) current.prev.next = current.next;
                    if (current.next) current.next.prev = current.prev;
                    if (current === this.head) this.head = current.next;
                    if (current === this.tail) this.tail = current.prev;
                    this.size--;
                    return;
                  }
                  current = current.next;
                }
              }

              // Get the front element
              front() {
                return this.head ? this.head.data : null;
              }

              // Get the back element
              back() {
                return this.tail ? this.tail.data : null;
              }

              // Check if the list is empty
              isEmpty() {
                return this.size === 0;
              }

              // Get the size of the list
              size() {
                return this.size;
              }
            }

            // Example usage:
            const dll = new DoublyLinkedList();
            dll.append(10);
            dll.append(20);
            dll.prepend(5);
            // List: 5 <-> 10 <-> 20

            dll.remove(10);
            // List: 5 <-> 20

            let frontElement = dll.front(); // frontElement === 5
            let backElement = dll.back(); // backElement === 20
            let isEmpty = dll.isEmpty(); // isEmpty === false
            let size = dll.size; // size === 2
            `}
          </pre>
          <div>
            <img
              className="w-full h-[500px]"
              src="../../doubly-linked.jpg"
              alt="Doubly Linked List Visualization"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DoublyLinkedListDescription;

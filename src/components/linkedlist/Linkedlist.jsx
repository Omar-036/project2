import React, { useState } from "react";
import Quiz from "../Quiz";
import LinkedListDescription from "./Desc";
import WorkArea from "./WorkArea";

const Linkedlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quizData = {
    quiz: {
      title: "Linked List Data Structure Quiz",
      description: "Test your knowledge of linked list data structure!",
      questions: [
        {
          question: "What is a linked list?",
          explanation:
            "A linked list is a linear data structure where elements are stored in nodes, and each node contains a reference to the next node in the sequence.",
          options: [
            "A linear data structure",
            "A non-linear data structure",
            "A tree data structure",
            "A graph data structure",
          ],
          correct_answer: "A linear data structure",
        },
        {
          question: "Which of the following is a type of linked list?",
          explanation:
            "A singly linked list is a type of linked list where each node points to the next node in the sequence.",
          options: [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "All of the above",
          ],
          correct_answer: "All of the above",
        },
        {
          question: "What is a node in a linked list?",
          explanation:
            "A node in a linked list is an element that contains data and a reference to the next node.",
          options: [
            "An element in a linked list",
            "A reference to the next node",
            "Both of the above",
            "None of the above",
          ],
          correct_answer: "Both of the above",
        },
        {
          question:
            "How do you insert a new node at the beginning of a singly linked list?",
          explanation:
            "To insert a new node at the beginning of a singly linked list, you need to update the new node's next reference to point to the current head, and then update the head to the new node.",
          options: [
            "Update the head to the new node",
            "Update the tail to the new node",
            "Update the previous node to the new node",
            "Update the current node to the new node",
          ],
          correct_answer: "Update the head to the new node",
        },
        {
          question:
            "How do you remove a node from the end of a singly linked list?",
          explanation:
            "To remove a node from the end of a singly linked list, you need to traverse the list to find the second to last node, update its next reference to null, and update the tail to the second to last node.",
          options: [
            "Update the tail to the second to last node",
            "Update the head to the second to last node",
            "Update the next reference of the second to last node to null",
            "Both A and C",
          ],
          correct_answer: "Both A and C",
        },
        {
          question:
            "What is the time complexity of searching for an element in a linked list?",
          explanation:
            "The time complexity of searching for an element in a linked list is O(n) because you may need to traverse the entire list to find the element.",
          options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          correct_answer: "O(n)",
        },
        {
          question:
            "Which data structure allows for efficient insertion and deletion of elements?",
          explanation:
            "A linked list allows for efficient insertion and deletion of elements, especially at the beginning or end of the list.",
          options: ["Array", "Linked List", "Stack", "Queue"],
          correct_answer: "Linked List",
        },
        {
          question:
            "In a doubly linked list, each node contains references to which nodes?",
          explanation:
            "In a doubly linked list, each node contains references to both the next node and the previous node.",
          options: [
            "Next node",
            "Previous node",
            "Both next and previous nodes",
            "None of the above",
          ],
          correct_answer: "Both next and previous nodes",
        },
        {
          question: "What is a circular linked list?",
          explanation:
            "A circular linked list is a type of linked list where the last node points back to the first node, forming a circle.",
          options: [
            "A list where the last node points to the first node",
            "A list where each node points to itself",
            "A list where each node points to two other nodes",
            "None of the above",
          ],
          correct_answer: "A list where the last node points to the first node",
        },
        {
          question: "What is the advantage of a linked list over an array?",
          explanation:
            "The advantage of a linked list over an array is that linked lists allow for dynamic memory allocation, meaning they can grow or shrink in size without the need for reallocation or resizing.",
          options: [
            "Dynamic memory allocation",
            "Fixed size",
            "Efficient random access",
            "None of the above",
          ],
          correct_answer: "Dynamic memory allocation",
        },
      ],
    },
  };

  return (
    <div className="bg-primary text-white overflow-hidden">
      <LinkedListDescription />
      <WorkArea />
      {isOpen ? (
        <Quiz quizData={quizData} />
      ) : (
        <div className="mx-auto container p-6 my-24">
          <h2 className="text-4xl capitalize my-6 ">
            Test your abilities with a short exam
          </h2>
          <button
            className="bg-green-500 capitalize   block px-8 py-4 rounded-lg  font-semibold"
            onClick={() => setIsOpen(true)}
          >
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Linkedlist;

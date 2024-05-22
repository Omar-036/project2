import React, { useState } from "react";

import Quiz from "../Quiz";
import WorkArea from "./WorkArea";
import DoublyLinkedListDescription from "./Desc";

const DoublyLinked = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quizData = {
    quiz: {
      title: "Doubly Linked List Data Structure Quiz",
      description:
        "Test your knowledge of the doubly linked list data structure!",
      questions: [
        {
          question: "What is a doubly linked list?",
          explanation:
            "A doubly linked list is a type of linked list in which each node contains a data part and two pointers to the previous and next nodes in the sequence.",
          options: [
            "A list where each node points only to the next node",
            "A list where each node points to both the previous and next nodes",
            "A list where nodes are connected in a circular fashion",
            "A list where nodes are not connected to any other nodes",
          ],
          correct_answer:
            "A list where each node points to both the previous and next nodes",
        },
        {
          question:
            "Which operation adds an element at the end of the doubly linked list?",
          explanation:
            "The 'append' operation adds an element at the end of the doubly linked list.",
          options: ["append", "prepend", "insert", "remove"],
          correct_answer: "append",
        },
        {
          question:
            "Which operation adds an element at the beginning of the doubly linked list?",
          explanation:
            "The 'prepend' operation adds an element at the beginning of the doubly linked list.",
          options: ["append", "prepend", "insert", "remove"],
          correct_answer: "prepend",
        },
        {
          question:
            "What is the time complexity of inserting an element at the beginning of a doubly linked list?",
          explanation:
            "The time complexity of inserting an element at the beginning of a doubly linked list is O(1) because it only involves adjusting pointers.",
          options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
          correct_answer: "O(1)",
        },
        {
          question:
            "Which operation removes an element from the doubly linked list?",
          explanation:
            "The 'remove' operation removes an element from the doubly linked list by adjusting the pointers of the surrounding nodes.",
          options: ["append", "prepend", "insert", "remove"],
          correct_answer: "remove",
        },
        {
          question: "How do you traverse a doubly linked list?",
          explanation:
            "To traverse a doubly linked list, you start from the head and follow the next pointers, or you can start from the tail and follow the previous pointers.",
          options: [
            "From head to tail",
            "From tail to head",
            "Either from head to tail or tail to head",
            "By randomly accessing nodes",
          ],
          correct_answer: "Either from head to tail or tail to head",
        },
        {
          question:
            "What is the main advantage of a doubly linked list over a singly linked list?",
          explanation:
            "The main advantage of a doubly linked list over a singly linked list is that it allows traversal in both directions.",
          options: [
            "Less memory usage",
            "Simpler implementation",
            "Allows traversal in both directions",
            "Faster insertion at the end",
          ],
          correct_answer: "Allows traversal in both directions",
        },
        {
          question:
            "Which pointer does a node in a doubly linked list contain?",
          explanation:
            "A node in a doubly linked list contains two pointers: one pointing to the previous node and one pointing to the next node.",
          options: [
            "Only next",
            "Only previous",
            "Both previous and next",
            "No pointers",
          ],
          correct_answer: "Both previous and next",
        },
        {
          question:
            "What happens when you try to access the previous node of the head in a doubly linked list?",
          explanation:
            "Accessing the previous node of the head in a doubly linked list will return null or None, indicating there is no previous node.",
          options: [
            "It returns the last node",
            "It returns null or None",
            "It causes an error",
            "It returns the head node itself",
          ],
          correct_answer: "It returns null or None",
        },
        {
          question:
            "What is a potential drawback of using a doubly linked list?",
          explanation:
            "A potential drawback of using a doubly linked list is that it uses more memory due to the extra pointer in each node.",
          options: [
            "Slower access time",
            "Increased memory usage",
            "Complicated insertion and deletion",
            "Limited traversal options",
          ],
          correct_answer: "Increased memory usage",
        },
      ],
    },
  };

  return (
    <div className="bg-primary text-white overflow-hidden ">
      <DoublyLinkedListDescription />
      <WorkArea />
      {isOpen ? (
        <Quiz quizData={quizData} />
      ) : (
        <div className="p-24">
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

export default DoublyLinked;

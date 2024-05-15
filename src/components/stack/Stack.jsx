import React, { useState } from "react";
import Quiz from "../Quiz";
import StackDescription from "./Desc";
import WorkArea from "./WorkArea";

const Stack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quizData = {
    quiz: {
      title: "Stack Data Structure Quiz",
      description: "Test your knowledge of stack data structure!",
      questions: [
        {
          question: "What is a stack?",
          explanation:
            "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It means that the element added last will be the first one to be removed.",
          options: [
            "A linear data structure",
            "A non-linear data structure",
            "A tree data structure",
            "A graph data structure",
          ],
          correct_answer: "A linear data structure",
        },
        {
          question: "Which operation adds an element to the top of the stack?",
          explanation:
            "The 'push' operation adds an element to the top of the stack.",
          options: ["push", "pop", "enqueue", "dequeue"],
          correct_answer: "push",
        },
        {
          question: "Which operation removes the top element from the stack?",
          explanation:
            "The 'pop' operation removes the top element from the stack.",
          options: ["push", "pop", "enqueue", "dequeue"],
          correct_answer: "pop",
        },
        {
          question:
            "Which data structure follows the Last In First Out (LIFO) principle?",
          explanation:
            "The stack follows the Last In First Out (LIFO) principle.",
          options: ["Queue", "Stack", "Linked List", "Tree"],
          correct_answer: "Stack",
        },
        {
          question:
            "What happens when you try to pop an element from an empty stack?",
          explanation:
            "When you try to pop an element from an empty stack, it results in a stack underflow.",
          options: [
            "Stack underflow",
            "Stack overflow",
            "Memory overflow",
            "Memory underflow",
          ],
          correct_answer: "Stack underflow",
        },
        {
          question: "Which of the following is not a stack implementation?",
          explanation: "A queue is not a stack implementation.",
          options: ["Array", "Linked list", "Queue", "Vector"],
          correct_answer: "Queue",
        },
        {
          question:
            "Which operation retrieves the top element of the stack without removing it?",
          explanation:
            "The 'peek' operation retrieves the top element of the stack without removing it.",
          options: ["peek", "pop", "top", "fetch"],
          correct_answer: "peek",
        },
        {
          question: "In a stack, where does the insertion and deletion happen?",
          explanation:
            "In a stack, both insertion and deletion happen at the top.",
          options: ["Front", "Middle", "End", "Top"],
          correct_answer: "Top",
        },
        {
          question: "Which operation checks if the stack is empty?",
          explanation: "The 'isEmpty' operation checks if the stack is empty.",
          options: ["isEmpty", "isFull", "checkEmpty", "checkFull"],
          correct_answer: "isEmpty",
        },
        {
          question: "Which operation checks if the stack is full?",
          explanation: "The 'isFull' operation checks if the stack is full.",
          options: ["isEmpty", "isFull", "checkEmpty", "checkFull"],
          correct_answer: "isFull",
        },
      ],
    },
  };

  return (
    <div className="bg-primary text-white overflow-hidden ">
      <StackDescription />
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

export default Stack;

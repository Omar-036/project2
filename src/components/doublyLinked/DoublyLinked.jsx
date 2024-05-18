import React, { useState } from "react";
import QueueDescription from "./Desc";
import Quiz from "../Quiz";
import WorkArea from "./WorkArea";

const DoublyLinked = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quizData = {
    quiz: {
      title: "Queue Data Structure Quiz",
      description: "Test your knowledge of queue data structure!",
      questions: [
        {
          question: "What is a queue?",
          explanation:
            "A queue is a linear data structure that follows the First In First Out (FIFO) principle. It means that the element added first will be the first one to be removed.",
          options: [
            "A linear data structure",
            "A non-linear data structure",
            "A tree data structure",
            "A graph data structure",
          ],
          correct_answer: "A linear data structure",
        },
        {
          question: "Which operation adds an element to the end of the queue?",
          explanation:
            "The 'enqueue' operation adds an element to the end of the queue.",
          options: ["enqueue", "dequeue", "push", "pop"],
          correct_answer: "enqueue",
        },
        {
          question: "Which operation removes the front element from the queue?",
          explanation:
            "The 'dequeue' operation removes the front element from the queue.",
          options: ["enqueue", "dequeue", "push", "pop"],
          correct_answer: "dequeue",
        },
        {
          question:
            "Which data structure follows the First In First Out (FIFO) principle?",
          explanation:
            "The queue follows the First In First Out (FIFO) principle.",
          options: ["Queue", "Stack", "Linked List", "Tree"],
          correct_answer: "Queue",
        },
        {
          question:
            "What happens when you try to dequeue an element from an empty queue?",
          explanation:
            "When you try to dequeue an element from an empty queue, it results in a queue underflow.",
          options: [
            "Queue underflow",
            "Queue overflow",
            "Memory overflow",
            "Memory underflow",
          ],
          correct_answer: "Queue underflow",
        },
        {
          question: "Which of the following is not a queue implementation?",
          explanation: "A stack is not a queue implementation.",
          options: ["Array", "Linked list", "Stack", "Circular buffer"],
          correct_answer: "Stack",
        },
        {
          question:
            "Which operation retrieves the front element of the queue without removing it?",
          explanation:
            "The 'front' operation retrieves the front element of the queue without removing it.",
          options: ["front", "dequeue", "peek", "top"],
          correct_answer: "front",
        },
        {
          question: "In a queue, where does the insertion happen?",
          explanation: "In a queue, the insertion happens at the end (rear).",
          options: ["Front", "Middle", "End", "Top"],
          correct_answer: "End",
        },
        {
          question: "In a queue, where does the deletion happen?",
          explanation: "In a queue, the deletion happens at the front.",
          options: ["Front", "Middle", "End", "Top"],
          correct_answer: "Front",
        },
        {
          question: "Which operation checks if the queue is empty?",
          explanation: "The 'isEmpty' operation checks if the queue is empty.",
          options: ["isEmpty", "isFull", "checkEmpty", "checkFull"],
          correct_answer: "isEmpty",
        },
      ],
    },
  };

  return (
    <div className="bg-primary text-white overflow-hidden ">
      <QueueDescription />
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

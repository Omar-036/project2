import React, { useState } from "react";
import Quiz from "../Quiz";
import ArrayDescription from "./Desc";
import WorkArea from "./WorkArea";

const Array = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quizData = {
    quiz: {
      title: "Array Data Structure Quiz",
      description: "Test your knowledge of array data structure!",
      questions: [
        {
          question: "What is an array?",
          explanation:
            "An array is a collection of elements stored at contiguous memory locations, allowing efficient indexing.",
          options: [
            "A linear data structure",
            "A non-linear data structure",
            "A tree data structure",
            "A graph data structure",
          ],
          correct_answer: "A linear data structure",
        },
        {
          question: "How are elements accessed in an array?",
          explanation:
            "Elements in an array are accessed using their index, which is their position in the array.",
          options: ["Using index", "Using key", "Using value", "Using pointer"],
          correct_answer: "Using index",
        },
        {
          question:
            "What is the time complexity of accessing an element in an array?",
          explanation:
            "Accessing an element in an array has a time complexity of O(1), which means it takes constant time.",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correct_answer: "O(1)",
        },
        {
          question:
            "What happens if you try to access an element out of the array's bounds?",
          explanation:
            "Accessing an element out of the array's bounds results in an 'Array Index Out of Bounds' error.",
          options: [
            "Segmentation fault",
            "Array Index Out of Bounds",
            "Memory leak",
            "Null pointer exception",
          ],
          correct_answer: "Array Index Out of Bounds",
        },
        {
          question: "How is the size of an array determined?",
          explanation:
            "The size of an array is determined at the time of its declaration and is fixed.",
          options: [
            "Determined at declaration and fixed",
            "Can be changed dynamically",
            "Determined at runtime",
            "Depends on the elements stored",
          ],
          correct_answer: "Determined at declaration and fixed",
        },
        {
          question:
            "Which of the following is not a valid way to declare an array in most programming languages?",
          explanation:
            "Option 'Array elements()' is not a valid way to declare an array.",
          options: [
            "int[] array",
            "Array elements()",
            "int array[]",
            "int array[10]",
          ],
          correct_answer: "Array elements()",
        },
        {
          question:
            "What is the starting index of an array in most programming languages?",
          explanation:
            "In most programming languages, the starting index of an array is 0.",
          options: ["0", "1", "-1", "Depends on the language"],
          correct_answer: "0",
        },
        {
          question:
            "What is the time complexity of inserting an element at the end of an array?",
          explanation:
            "Inserting an element at the end of an array typically has a time complexity of O(1), assuming there is enough space.",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correct_answer: "O(1)",
        },
        {
          question:
            "What is the time complexity of inserting an element at the beginning of an array?",
          explanation:
            "Inserting an element at the beginning of an array has a time complexity of O(n) because all elements have to be shifted.",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correct_answer: "O(n)",
        },
        {
          question: "What is a multi-dimensional array?",
          explanation:
            "A multi-dimensional array is an array of arrays, where each element is itself an array.",
          options: [
            "An array of arrays",
            "A single-dimensional array",
            "A linked list",
            "A tree structure",
          ],
          correct_answer: "An array of arrays",
        },
      ],
    },
  };

  return (
    <div className="bg-primary text-white overflow-hidden ">
      <ArrayDescription />
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

export default Array;

import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "what language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "what are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "what's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child coponenets?",
    answer: "props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 2002,
    question:
      "what do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : "null");
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

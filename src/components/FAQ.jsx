import { useState } from "react";
import { ExpandIcon } from "./Icons";

const questions = [
  {
    question: "Is it completely free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
  {
    question: "What kind of activities can I do?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
  {
    question: "What happens if I miss a break or if my buddy misses my break?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
  {
    question: "How long can each break be?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
  {
    question: "Who sees my break posts?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
  {
    question: "Do I have to do their activity too?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum voluptates dolore, quo, amet id vel dolorem atque, eligendi excepturi exercitationem recusandae ea rerum dolores aliquid? Quia nostrum iste quo.",
  },
];

function FAQ() {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const handleClick = (index) => {
    setExpandedQuestions((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="border flex justify-center py-12">
      <div className="flex flex-col items-center gap-6">
        <h2>FAQ</h2>
        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex flex-col w-[600px] px-4 py-2 relative gap-3 bg-[#EBF6FF]"
            >
              <h3>{question.question}</h3>
              {expandedQuestions.includes(index) && <h3>{question.answer}</h3>}
              <div
                onClick={() => handleClick(index)}
                className="cursor-pointer absolute right-4"
              >
                <ExpandIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

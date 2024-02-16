import { useState } from "react";
import { ExpandIcon } from "./Icons";

const questions = [
  {
    question: "Is it completely free?",
    answer:
      "To try it, you have 3 free breaks a week. If you would like more, you may  upgrade for $5/month",
  },
  {
    question: "What kind of activities can I do?",
    answer:
      "You can do all sorts of activities  as long as it abides by our community guidelines. Some recommended activities are going for a walk, meal prepping, eating lunch and making art. Choosing video and/or audio will depend on your activity and comfort level.",
  },
  {
    question: "What happens if I miss a break?",
    answer:
      "Any missed breaks will result in temporarily suspension of your account. If it is your first time using the platform, a missed break will activate guidelines to help you navigate Break Buddy.",
  },
  {
    question: "How long can each break be?",
    answer:
      "Our recommended durations are 20, 30, 45 and 60, but it is up to you when you end your call. We trust that you and your break buddy are able to communicate your needs with each other.",
  },
  {
    question: "Who sees my break posts?",
    answer:
      "Break buddies have a choice to post breaks to the public which will be visible to all users. You may also invite friends and family to see when you sync up your breaks. You can add them to your favourites and choose to only see their posts or only have them see yours.",
  },
  {
    question: "Do I have to do their activity too?",
    answer:
      "No, their posted activity serves as inspiration and suggestion. Be respectful of each other’s comforts and again, make sure you are complying to the community guidelines.",
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
    <div className="flex justify-center py-12">
      <div className="flex flex-col items-center gap-6 px-3">
        <h2>FAQ</h2>
        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
                <div
                key={index}
                className={`flex flex-col w-[330px] md:w-[600px] px-4 py-2 relative gap-3 bg-[#EBF6FF] ${
                  expandedQuestions.includes(index) ? 'font-bold' : ''
                }`}
              >
              <h3>{question.question}</h3>
              {expandedQuestions.includes(index) && <h3 className="font-normal">{question.answer}</h3>}
              <div
                onClick={() => {
                  handleClick(index);
                }}
                className="cursor-pointer absolute right-4 top-3"
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

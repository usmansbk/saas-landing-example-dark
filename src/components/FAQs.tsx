"use client";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { useState } from "react";
import clsx from "clsx";

const faqs = [
  {
    question: "How does the pricing work for teams?",
    answer:
      "We offer a 20% discount for teams of 10 or more. Please contact us for more information.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. If you need assistance, please contact our support team.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? (
          <MinusIcon className="w-5 h-5" />
        ) : (
          <PlusIcon className="w-5 h-5" />
        )}
      </div>
      <div
        className={clsx("mt-4", {
          hidden: !isOpen,
        })}
      >
        {answer}
      </div>
    </div>
  );
};

export default function FAQs() {
  return (
    <div className="text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {faqs.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
}

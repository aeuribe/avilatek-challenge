"use client";

import { useState } from "react";
import PlusIcon from "../../../assets/plus-circle.svg";
import MinusIcon from "../../../assets/minus-circle.svg";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
    "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
    "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
    "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
    "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    answer:
    "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },

];

export default function FAQSection() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="bg-white px-4 md:px-16 lg:px-32 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-center text-[#101828] mb-5">
          Frequently asked questions
        </h2>
        <p className="font-inter font-normal text-[20px] leading-[30px] tracking-[0em] text-center text-[#475467]">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggle(index)}
            >
              <span className="font-inter font-medium text-[18px] leading-[28px] tracking-[0em] text-[#101828]">
                {faq.question}
              </span>
              <span className="ml-4 shrink-0">
                <Image
                  src={openStates[index] ? MinusIcon : PlusIcon}
                  alt="Toggle Icon"
                  className="w-5 h-5 text-gray-400"
                />
              </span>
            </button>

            {openStates[index] && (
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

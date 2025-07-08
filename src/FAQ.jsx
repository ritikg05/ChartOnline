"use client";

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does Chart Online have a privacy notice?",
    answer_from_text:
      "Absolutely yes. At Chart Online, safeguarding your privacy and ensuring data security are our top priorities. In addition to our comprehensive privacy notice, we are dedicated to compliance with regulations such as GDPR, ISO 27001, and SOC2 (in progress), demonstrating our commitment to protecting your information.",
  },
  {
    question: "How can I get in touch with you for questions or to share feedback?",
    answer_from_text:
      "1. Experience issues, discover bugs or have suggestions for Chart Online? Share with us! We'll promptly review your feedback within 48 hours.\n2. Simply log in, select your profile at the bottom left corner, then click on the Feedback section to enter your comments.",
  },
  {
    question: "Is Chart Online free?",
    answer_from_text:
      "You can start using Chart Online for free. For advanced features like image understanding or SQL connectors, you’ll need to upgrade your plan.",
  },
  {
    question: "How does Chart Online work?",
    answer_from_text:
      "Chart Online uses GPT-4, GPT-4o, and other top AI models to understand your data, generate visuals, and respond accurately in real-time.",
  },
  {
    question: "Can I analyze spreadsheets with multiple tabs?",
    answer_from_text:
      "Yes, just upload your spreadsheet and refer to specific tabs in your query.",
  },
  {
    question: "Can I analyze multiple files simultaneously?",
    answer_from_text:
      "Yes, you can upload up to 10 files into a dataset and analyze them all together.",
  },
  {
    question: "What is Chart Online?",
    answer_from_text:
      "Chart Online is a SaaS platform that turns Excel and other data sources into visuals using AI, optimized for personal and enterprise use.",
  },
  {
    question: "How can I use Chart Online?",
    answer_from_text:
      "Log in, upload data like PDFs or spreadsheets, and ask questions or generate charts via natural language or quick commands.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 lg:py-40">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-700">
          <motion.h2
            className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <AnimatePresence>
                        {open && (
                          <Disclosure.Panel as="dd">
                            <motion.p
                              className="mt-2 pr-12 text-base leading-7 text-gray-600 dark:text-gray-300 whitespace-pre-line"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {faq.answer_from_text}
                            </motion.p>
                          </Disclosure.Panel>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}

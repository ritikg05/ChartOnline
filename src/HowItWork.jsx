import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Upload Your Excel Files",
    description:
      "Easily upload your Excel file containing the data you want to visualize. Chart Online supports multiple file formats.",
  },
  {
    number: 2,
    title: "Select Your Graph Type",
    description:
      'Choose the type of graph you need—bar, line, or pie chart—and specify the data range. For example: "Generate a bar chart using columns A and B."',
  },
  {
    number: 3,
    title: "Download Your Graph",
    description:
      "Once processed, download the chart instantly. Use it in reports, presentations, or analytics.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ number, title, description }, i) => (
            <motion.div
              key={number}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 text-left"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white font-semibold mb-4">
                {number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

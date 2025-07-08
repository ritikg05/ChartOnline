import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 px-4 min-h-[70vh] flex items-center justify-center">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
          Free Excel to Graph Converter – Visualizing Excel Data in Minutes
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-4">
          Transform your Excel spreadsheets into stunning visualizations effortlessly with <strong>Chart Online's</strong> Data Visualization Platform.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;

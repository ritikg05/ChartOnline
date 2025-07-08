import React from "react";
import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Feature = ({ icon: Icon, title, description, image, altText, reverse }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeVariant}
      className={`flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-16 py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon size={40} className="text-indigo-600" />}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={altText || title}
          loading="lazy"
          className="w-full h-auto max-w-md mx-auto rounded-xl shadow-md object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Feature;

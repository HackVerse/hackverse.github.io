"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function LampDemo() {
  return (
    <LampContainer />
  );
}

export const LampContainer = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-visible bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 overflow-visible">
        <motion.div
          initial={{ opacity: 0.5, width: "50%" }} // Use percentage for width
          whileInView={{ opacity: 1, width: "80%" }} // Adjust percentage as needed
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute inset-auto right-1/2 h-56 bg-gradient-conic from-[#7B181D] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "50%" }} // Use percentage for width
          whileInView={{ opacity: 1, width: "80%" }} // Adjust percentage as needed
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-[#7B181D] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#7B181D] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "20%" }} // Use percentage for width
          whileInView={{ width: "40%" }} // Adjust percentage as needed
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[0rem] rounded-full bg-red-500 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "50%" }} // Use percentage for width
          whileInView={{ width: "80%" }} // Adjust percentage as needed
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[80%] -translate-y-[7rem] bg-red-500" // Adjusted translate-y value
        ></motion.div>
      </div>
    </div>
  );
};

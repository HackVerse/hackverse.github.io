"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  const imageVariants = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } },
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ background: "linear-gradient(180deg, #360202, #000)" }}
      className="relative flex flex-col md:flex-row h-screen min-h-[660px] text-white overflow-hidden"
    >
      {/* Left Section */}
      <div className="md:w-1/3 w-full flex flex-col justify-center items-start mt-24 md:mt-0 pl-8 md:pl-16 pr-4 md:pr-0 z-10">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 whitespace-nowrap"
          variants={textVariants(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          //title
        >
          <span>HACKVERSE </span>
          <span className="bg-[#7B181D] px-4 pb-2">5.0</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-[#ffffffaa] lg:text-4xl font-extralight mb-10 md:mb-[20vh] uppercase whitespace-nowrap"
          variants={textVariants(0.3)}
          //subtitle
        >
          24 hour hackathon @ NITK
        </motion.p>

        <motion.p
          className="text-2xl text-[#ffffffaa] md:text-3xl lg:text-4xl font-extralight uppercase mb-8"
          variants={textVariants(0.4)}
          //date
        >
          Coming soon...
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex text-lg md:text-xl gap-4"
          variants={textVariants(0.5)}
        >
          <motion.button
            className="px-8 py-2 whitespace-nowrap rounded-md bg-[#360E10] font-bold text-[#dadada] tracking-widest uppercase transform border-2 border-[#360E10] border-solid"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={() => window.open("https://hackverse-2023.devfolio.co/", "_blank")}
          >
            DEVFOLIO post
          </motion.button>

          <motion.button
            className="px-8 py-2 rounded-md bg-[#dadada] font-bold text-[#360E10] tracking-widest uppercase transform border-2 border-[#360E10] border-solid"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={() => window.open("https://www.nitk.ac.in/How_To_Reach", "_blank")}
          >
            NITK
          </motion.button>
        </motion.div>
      </div>

      {/* Right Section with Images */}
      <div className="md:w-2/3 w-full h-full flex items-center justify-center mt-0 md:mt-10 relative">
        {[
          "backgrounds/bg-landing-1.png",
          "backgrounds/bg-landing-2.png",
          "backgrounds/bg-landing-3.png",
          "backgrounds/bg-landing-4.png",
        ].map((src, index) => (
          <motion.img
            key={src}
            src={`/${src}`}
            alt={`Background ${index + 1}`}
            className="absolute max-w-[90%] max-h-[90vh] md:max-h-[80vh] w-auto h-auto object-contain z-0"
            variants={imageVariants(index * 0.3)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LandingPage;

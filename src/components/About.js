"use client";
import React, { useRef, useEffect, useState } from "react";
import { LampDemo } from "./ui/lamp";
import { motion, useInView } from "framer-motion";

export default function About() {
  const screenWidth = window.innerWidth;

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { triggerOnce: false });

  const textRef1 = useRef(null);
  const isText1InView = useInView(textRef1, { triggerOnce: false });

  const textRef2 = useRef(null);
  const isText2InView = useInView(textRef2, { triggerOnce: false });

  const imageRef = useRef(null);
  const lampRef = useRef(null);
  const isLampInView = useInView(lampRef, { triggerOnce: false });
  const containerRef = useRef(null); // Ref for the main container
  const isInView = useInView(containerRef, { triggerOnce: false }); // Detect if the main container is in view

  // State to control flickering
  const [isFlickering, setIsFlickering] = useState(false);

  // Horror flickering animation with very fast, erratic intervals
  const horrorFlicker = {
    initial: { opacity: 1 },
    animate: isFlickering
      ? {
          opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
          transition: {
            duration: 4,
            times: [0, 0.1, 0.2, 0.3, 0.45, 0.5, 0.6, 0.75, 0.85, 0.95, 1],
            ease: "easeInOut",
          },
        }
      : { opacity: 1 }, // No flickering if not in view
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  useEffect(() => {
    let interval;

    if (isInView) {
      // Start flickering when section is in view
      setIsFlickering(true); // Start the horror flickering
      if (imageRef.current && lampRef.current) {
        imageRef.current.style.opacity = "1";
        lampRef.current.style.opacity = "1";
      }

      interval = setInterval(() => {
        if (imageRef.current && lampRef.current) {
          // Set both elements to zero opacity
          imageRef.current.style.opacity = "0";
          lampRef.current.style.opacity = "0";

          setTimeout(() => {
            // Restore opacity to 1
            imageRef.current.style.opacity = "1";
            lampRef.current.style.opacity = "1";
          }, 200); // Brief flicker duration at zero
        }
      }, 6000); // Flicker every 6 seconds
    } else {
      // Reset flickering when out of view
      clearInterval(interval);
      setIsFlickering(false); // Stop the horror flickering
    }

    return () => clearInterval(interval);
  }, [isInView]); // Restart effect every time the section comes into view

  return (
    <div
      ref={containerRef} // Attach ref to detect when container is in view
      className="relative min-h-screen bg-[#000000] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 overflow-hidden"
    >
      {/* Left Section */}
      <div className="relative z-10 w-full md:w-3/5 flex flex-col justify-center space-y-8 md:space-y-20 text-white mb-8 md:mb-0">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-left uppercase text-[#ffffff] mt-10"
          style={{ lineHeight: "1.5" }}
        >
          Unleash the power of innovation in the vaults of HackVerse, <span className="bg-[#7B181D] px-4 whitespace-nowrap pb-2">where the heist meets technology</span>
        </motion.h1>

        <motion.p
          ref={textRef1}
          initial="hidden"
          animate={isText1InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left px-2 sm:px-6 md:px-0"
        >
          Join us at HackVerse, a platform that celebrates the power of enthusiastic minds to ideate innovative solutions for complex issues across India. It all started with a vision to bring together like-minded hackers to our alma mater in NITK Surathkal, and we're thrilled to be the pioneers of this unique initiative.
        </motion.p>
        <motion.p
          ref={textRef2}
          initial="hidden"
          animate={isText2InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          className="text-base pt-4 sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left px-2 sm:px-6 md:px-0"
        >
          Be a part of an experience that celebrates innovation and provides developers with the opportunity to showcase their potential to the fullest. Get inspired by industry leaders through engaging keynotes and workshops.
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-2/5 flex items-center justify-center mt-8 md:mt-0">
        {/* Bottom Layer: Lamp */}
        <motion.div
          ref={lampRef} // Attach ref for the lamp
          className="absolute inset-0 flex items-center justify-center z-0"
          variants={horrorFlicker}
          initial="initial"
          animate={isFlickering ? "animate" : "initial"}
          style={{ transform: "translateY(-44px)" }}
        >
          <LampDemo />
        </motion.div>

        {/* Top Layer: Image */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={screenWidth < 768 ? (isLampInView ? "visible" : "hidden") : (isTitleInView ? "visible" : "hidden")}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="relative flex items-center justify-center z-10"
          style={{ transform: "translateY(40px)" }}
        >
          <motion.img
            src="hackverse-img.png" // Replace with the correct image path
            alt="Lamp Demo"
            className="w-96 sm:w-32 md:w-auto h-auto object-contain"
            variants={horrorFlicker}
            initial="initial"
            animate={isFlickering ? "animate" : "initial"}
            style={screenWidth < 768 ? { transform: "translateY(-50px)" } : {}}
          />
        </motion.div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { IconArrowRight } from '@tabler/icons-react';

const MarqueeText = () => {
  const phrases = [
    "REGISTRATION IS NOW OPEN",
    "REGISTRATION IS NOW OPEN",
    "REGISTRATION IS NOW OPEN",
    "REGISTRATION IS NOW OPEN",
    "REGISTRATION IS NOW OPEN"
  ];

  const combinedText = phrases.join(" • ");

  const marqueeVariants = {
    animate: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap">
      <div className="flex shrink-0">
        <motion.div
          className="flex shrink-0 items-center gap-4 text-black text-lg uppercase"
          variants={marqueeVariants}
          animate="animate"
        >
          <span className="shrink-0">{combinedText}</span>
          <span className="shrink-0">{combinedText}</span>
          <span className="shrink-0">{combinedText}</span>
          <span className="shrink-0">{combinedText}</span>
        </motion.div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const bottomSectionControls = useAnimation();
  const subtitleControls = useAnimation();
  const titleControls = useAnimation();
  const logoControls = useAnimation();

  const bottomSectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const createObserver = (ref, animationControls) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animationControls.start("visible");
          } else {
            animationControls.start("hidden");
          }
        },
        { threshold: 0.1 }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    };

    const bottomCleanup = createObserver(bottomSectionRef, bottomSectionControls);
    const subtitleCleanup = createObserver(subtitleRef, subtitleControls);
    const titleCleanup = createObserver(titleRef, titleControls);
    const logoCleanup = createObserver(logoRef, logoControls);

    return () => {
      bottomCleanup();
      subtitleCleanup();
      titleCleanup();
      logoCleanup();
    };
  }, [bottomSectionControls, subtitleControls, titleControls, logoControls]);

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative h-dvh md:h-[96vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/backgrounds/bg-landing-new.png')" }}>
      {/* Infinite Scrolling Marquee */}
      <div className="absolute top-2 md:top-5 w-full overflow-hidden bg-white py-2">
        <MarqueeText />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-full mt-12">
        <motion.p
          ref={subtitleRef}
          className="text-2xl md:text-3xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
    11-12th JANUARY 2025
        </motion.p>
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HACK <span className="bg-[#7B181D] text-5xl px-2 pb-2 pt-[3px] md:text-7xl md:px-4 md:pb-4 md:pt-[7px] inline-block transform -translate-y-[4px] md:-translate-y-[11px]">5.0</span> VERSE
        </motion.h1>

        <motion.img
          ref={logoRef}
          src="/img/bird_logo.png"
          alt="Bird Logo"
          className="w-64 h-auto mb-32 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Floating Bottom Section */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex justify-center"
        ref={bottomSectionRef}
        initial="hidden"
        animate={bottomSectionControls}
        variants={fadeInFromBottom}
      >
        <div className="w-[90%] sm:w-[80%] flex flex-col sm:flex-row items-center justify-between bg-[#3d3d3d] bg-opacity-60 py-4 px-6 rounded-lg">
          {/* Left Button - Sponsor Us */}
          <a href="mailto:hackverse@nitk.edu.in" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="text-white uppercase text-xl font-bold tracking-wider hover:text-gray-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <IconArrowRight className="mr-2 w-6 h-6" /> {/* Arrow Icon */}
              Sponsor Us
            </motion.button>
          </a>

          {/* Center Text */}
          <div className="text-center text-white text-sm md:text-lg uppercase tracking-wider my-4 sm:my-0 flex-grow">
            24-Hour Long Hackathon @ NITK, Surathkal
          </div>

          {/* Right Button - Apply Now */}
          <a href="https://hackverse5.devfolio.co/" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-[#be2525] text-white text-xl px-4 py-2 rounded-md font-bold uppercase tracking-wider hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
            >
              Apply Now!
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
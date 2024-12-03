import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerRef = useRef(null);
  const isTimerInView = useInView(timerRef, { triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date('2024-12-27T00:00:00');
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div
      className="w-full h-56 flex flex-col items-center justify-end"
      style={{ background: "linear-gradient(180deg, #360202, #000)" }}
    >
      {/* "Registration Ends In" Label */}
      <motion.div
        className="text-white text-2xl sm:text-3xl font-bold mb-4 uppercase"
        initial="hidden"
        animate={isTimerInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Registration Ends In
      </motion.div>

      {/* Timer Container */}
      <motion.div
        ref={timerRef}
        className="bg-[#3d3d3d] bg-opacity-30 text-white p-6 rounded-lg shadow-lg flex gap-8 w-3/4 sm:w-auto"
        initial="hidden"
        animate={isTimerInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl font-extrabold"
            key={time.days}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.days}
          </motion.div>
          <span className="text-base mt-1 font-bold text-[#a02026] uppercase sm:text-lg">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl font-extrabold"
            key={time.hours}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.hours}
          </motion.div>
          <span className="text-base font-bold mt-1 text-[#a02026] uppercase sm:text-lg">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl font-extrabold"
            key={time.minutes}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.minutes}
          </motion.div>
          <span className="text-base font-bold mt-1 text-[#a02026] uppercase sm:text-lg">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl font-extrabold"
            key={time.seconds}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.seconds}
          </motion.div>
          <span className="text-base font-bold mt-1 text-[#a02026] uppercase sm:text-lg">Seconds</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Timer;

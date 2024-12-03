import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date('2025-01-11T14:00:00');
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

  return (
    <div className="w-full h-44 flex items-center justify-center bg-gray-100">
      {/* Timer Container Fade-In Animation with Increased Duration */}
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex gap-8 w-3/4 sm:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          {/* Value Animation: Smooth transition with opacity and vertical movement */}
          <motion.div
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold" // Adjusted to 4xl for larger screens
            key={time.days} // Trigger reanimation on value change
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.days}
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl lg:text-xl">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold" // Adjusted to 4xl for larger screens
            key={time.hours}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.hours}
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl lg:text-xl">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold" // Adjusted to 4xl for larger screens
            key={time.minutes}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.minutes}
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl lg:text-xl">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold" // Adjusted to 4xl for larger screens
            key={time.seconds}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {time.seconds}
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl lg:text-xl">Seconds</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Timer;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconHome } from '@tabler/icons-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div 
      className="relative h-dvh bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/backgrounds/bg-landing-new.png')" }}
    >
      <div className="text-center">
        <motion.h1
          className="text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404 <span className="bg-[#7B181D] text-7xl px-4 pb-4 pt-2 inline-block transform -translate-y-2">ERROR</span>
        </motion.h1>

        <motion.p
          className="text-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          PAGE NOT FOUND
        </motion.p>

        <motion.button
          onClick={handleGoHome}
          className="bg-[#a92323] text-white text-xl px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-red-700 flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <IconHome className="mr-2 w-6 h-6" />
          Return to Home
        </motion.button>
      </div>
    </div>
  );
};

export default NotFoundPage;
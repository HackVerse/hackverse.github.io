import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

 /* Stats Content */

const STATS_DATA = [
  { number: "1500+", label: "Total Registrations" },
  { number: "400+", label: "Hackers Hosted" },
  { number: "140+", label: "Engineering Institutes" },
];

 /* Repeating Background Text */

const BackgroundText = React.memo(() => {
  return (
    <div className="absolute inset-0 w-[150%] h-full overflow-hidden flex flex-col text-[#434343] opacity-60 -translate-x-36 ">
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "1px " }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
      >
        &nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        &nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        &nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
      >
        &nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        &nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.65 }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
      <motion.div
        className="text-[96px] whitespace-nowrap font-black tracking-widest"
        style={{ WebkitTextStroke: "0px red" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      >
        &nbsp;&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
      </motion.div>
    </div>
  );
});



BackgroundText.displayName = 'BackgroundText';

const StatItem = React.memo(({ number, label, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <h2 className="text-4xl md:text-6xl text-[#a9252c] font-bold uppercase">{number}</h2>
    <p className="text-lg md:text-xl uppercase">{label}</p>
  </motion.div>
));

StatItem.displayName = 'StatItem';

export default function StatsSection() {
  const testimonials = useCallback(() => 
    Array.from({ length: 11 }).map((_, index) => ({
      image: `/gallery/IMG_${index + 1}.JPG`,
    })), 
  []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[#060606] text-white overflow-hidden">
      <BackgroundText />

      <motion.h1
        className="text-center text-4xl md:text-6xl font-extrabold py-5 z-10 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <span>HACKVERSE 4.0 </span>
        <span className="bg-[#7B181D] px-4 pb-2">HIGHLIGHTS</span>
      </motion.h1>

      <motion.div
        className="flex-grow flex items-center justify-center w-full z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <InfiniteMovingCards items={testimonials()} />
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-around py-8 text-center space-y-8 md:space-y-0 md:space-x-10 z-10 mb-10">
        {STATS_DATA.map((stat, index) => (
          <StatItem
            key={stat.label}
            number={stat.number}
            label={stat.label}
            delay={0.1 + index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
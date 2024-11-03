"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { X } from "lucide-react";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleClose = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleImageClick = (e) => {
    // Prevent click from propagating to overlay
    e.stopPropagation();
  };

  return (
    <div className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 md:gap-6 relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "group")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "fixed inset-0 z-50 flex items-center justify-center"
                : lastSelected?.id === card.id
                ? "z-40 bg-black rounded-xl h-full w-full"
                : "bg-black rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <motion.img
              layoutId={`image-${card.id}`}
              src={card.thumbnail}
              onClick={selected ? handleImageClick : undefined}
              className={cn(
                "object-cover transition-all duration-300",
                selected?.id === card.id
                  ? "w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] object-contain"
                  : "absolute inset-0 h-full w-full object-cover group-hover:scale-105"
              )}
              alt={`Gallery image ${card.id}`}
              loading="lazy"
            />
          </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
            
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={handleClose}
              className="fixed top-20 right-20 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Clickable overlay around the image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-40 flex items-center justify-center cursor-pointer"
            >
              {/* Image container that stops click propagation */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-50"
              >
                {/* Image content is rendered here by the AnimatePresence */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutGrid;
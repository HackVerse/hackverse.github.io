import React from 'react';
import LayoutGrid from './ui/layout-grid';

const ROW_PATTERNS = [
  // Pattern 1: [1, 1, 1] - Three single-column images
  [
    { span: 1 }, { span: 1 }, { span: 1 }
  ],
  // Pattern 2: [2, 1] - Two-column image followed by single-column
  [
    { span: 2 }, { span: 1 }
  ],
  // Pattern 3: [1, 2] - Single-column followed by two-column
  [
    { span: 1 }, { span: 2 }
  ],
  // Pattern 4: [3] - Full-width image
  [
    { span: 3 }
  ]
];

const generateCards = () => {
  const cards = [];
  let currentImageIndex = 1;

  const createCard = (span) => {
    if (currentImageIndex <= 42) {
      cards.push({
        id: currentImageIndex,
        className: `h-96 md:col-span-${span}`,
        thumbnail: `/gallery/IMG_${currentImageIndex}.JPG`
      });
      currentImageIndex++;
    }
  };

  // Generate enough rows to display all 42 images
  while (currentImageIndex <= 42) {
    // Randomly select a pattern for this row
    const pattern = ROW_PATTERNS[Math.floor(Math.random() * ROW_PATTERNS.length)];

    // Apply the pattern to create cards for this row
    pattern.forEach(({ span }) => createCard(span));
  }

  return cards;
};

const Gallery = () => {
  return (
    <div className="relative bg-[#080808] w-full pt-16 overflow-hidden">
      {/* Dot background with radial fade */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='%23666' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      {/* extra radial fade for the black background */}
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          opacity: 0.9,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      <div className="relative z-10 min-h-screen bg-neutral-950 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white"> </h1>
            <p className="text-gray-400 mt-2"> </p>
          </div>
          <LayoutGrid cards={generateCards()} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

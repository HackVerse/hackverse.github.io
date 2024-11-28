import React, { useState, useEffect, useRef, useMemo } from 'react';

const RotatingSVG = React.memo(({ rotation }) => (
  <svg 
    width="1200" 
    height="1200" 
    viewBox="0 0 1200 1200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-[95%] h-[95%] will-change-transform"
    style={{ 
      transform: `rotate(${rotation}deg)`,
    }}
  >
    <circle cx="602" cy="602" r="448" stroke="white" strokeWidth="8"/>
    <circle cx="601.5" cy="602.5" r="370.5" stroke="white" strokeWidth="8"/>
    <circle cx="601.5" cy="602.5" r="343.5" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="293" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="274" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="151" stroke="white" strokeWidth="4"/>
    <circle cx="601.5" cy="602.5" r="126.5" stroke="white" strokeWidth="4"/>
    <circle cx="601.5" cy="602.5" r="114.5" stroke="white" strokeWidth="4"/>
    <circle cx="601.5" cy="602.5" r="50.5" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="58" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="26" stroke="white" strokeWidth="4"/>
    <circle cx="602" cy="602" r="18" stroke="white" strokeWidth="4"/>
    <rect x="609" y="591" width="441" height="24" fill="black" stroke="white" strokeWidth="6"/>
    <path d="M587.598 603.015L367.098 221.098L387.883 209.098L608.383 591.015L587.598 603.015Z" fill="black" stroke="white" strokeWidth="6"/>
    <path d="M610.383 615.098L389.883 997.015L369.098 985.015L589.598 603.098L610.383 615.098Z" fill="black" stroke="white" strokeWidth="6"/>
  </svg>
));

const StaticSVG = React.memo(() => (
  <svg 
    width="1200" 
    height="1200" 
    viewBox="0 0 1200 1200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-[95%] h-[95%]"
  >
    <rect x="0.5" y="0.5" width="1199" height="1199"/>
    <path d="M413.267 600V696C413.267 771.5 342.206 767 342.206 767H103V866.5H119.014H259.635C259.635 866.5 259.635 958 363.724 958C467.814 958 684 958 684 958V804.5H607.434C530.868 804.5 530.868 728 530.868 728V600H413.267Z" fill="black" stroke="white" strokeWidth="7"/>
    <path d="M413.5 599V503C413.5 427.5 342.5 432 342.5 432H103.5V332.5H119.5H260C260 332.5 260 241 364 241C468 241 684 241 684 241V394.5H607.5C531 394.5 531 471 531 471V599H413.5Z" fill="black" stroke="white" strokeWidth="7"/>
    <rect x="30" y="122" width="86" height="955" fill="black" stroke="white" strokeWidth="8"/>
    <rect x="16" y="122" width="116" height="210" fill="black" stroke="white" strokeWidth="8"/>
    <rect x="16" y="867" width="116" height="210" fill="black" stroke="white" strokeWidth="8"/>
    {[278.5, 360.5, 836.5, 774.5].map(cy => (
      <React.Fragment key={cy}>
        <path d={`M664 ${cy}C664 ${cy + 7.518} 658.118 ${cy + 13.5} 651 ${cy + 13.5}C643.882 ${cy + 13.5} 638 ${cy + 7.518} 638 ${cy}C638 ${cy - 7.518} 643.882 ${cy - 13.5} 651 ${cy - 13.5}C658.118 ${cy - 13.5} 664 ${cy - 7.518} 664 ${cy}Z`} stroke="white" strokeWidth="4"/>
        <circle cx="651" cy={cy + 0.5} r="2" stroke="white" strokeWidth="4"/>
        <path d={`M584 ${cy}C584 ${cy + 7.518} 578.118 ${cy + 13.5} 571 ${cy + 13.5}C563.882 ${cy + 13.5} 558 ${cy + 7.518} 558 ${cy}C558 ${cy - 7.518} 563.882 ${cy - 13.5} 571 ${cy - 13.5}C578.118 ${cy - 13.5} 584 ${cy - 7.518} 584 ${cy}Z`} stroke="white" strokeWidth="4"/>
        <circle cx="571" cy={cy + 0.5} r="2" stroke="white" strokeWidth="4"/>
      </React.Fragment>
    ))}
  </svg>
));

const PrizeRow = ({ prize, medal, alt }) => (
  <div className="flex items-center space-x-2 justify-end">
    <img 
      src={medal} 
      alt={alt} 
      className="w-12 h-12 md:w-20 md:h-20 translate-y-[6px] object-contain" 
    />
    <span className="text-2xl md:text-5xl font-semibold">{prize}</span>
  </div>
);

const ContentSection = React.memo(({ title, description, children }) => (
  <div className="h-screen flex flex-col justify-center text-right md:mb-22">
    <h2 className="inline-block text-4xl md:text-6xl px-0 pb-2 text-white font-bold self-end"> 
      <span className="bg-[#7B181D] px-4 pb-2">{title}</span>
    </h2>
    <div className="text-2xl md:text-5xl whitespace-pre-line pt-16 md:pt-32 text-right">
      {children || description}
    </div>
  </div>
));

const StickyScrollSection = () => {
  const [rotation, setRotation] = useState(0);
  const [stickyPosition, setStickyPosition] = useState('fixed');
  const [translateY, setTranslateY] = useState('-50%');
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastRotation = useRef(0);

  const contentSections = useMemo(() => [
    {
      title: "MAIN PRIZES",
      content: (
        <div className="space-y-[10vh] md:space-y-[10vh]"> 
          <PrizeRow 
            prize="WINNER: ₹75,000" 
            medal="/prizes/gold-medal.png" 
            alt="Gold Medal" 
          />
          <PrizeRow 
            prize="RUNNER UP: ₹50,000" 
            medal="/prizes/silver-medal.png" 
            alt="Silver Medal" 
          />
          <PrizeRow 
            prize="SECOND RUNNER UP: ₹30,000" 
            medal="/prizes/bronze-medal.png" 
            alt="Bronze Medal" 
          />
        </div>
      )
    },
    {
      title: "SPECIAL PRIZES",
      content: (
        <div className="space-y-[10vh] md:space-y-[10vh]"> 
          <PrizeRow 
            prize="BEST WOMEN TEAM: ₹10,000" 
            medal="/prizes/women-icon.png" 
            alt="Women's Prize" 
          />
          <PrizeRow 
            prize="BEST DESIGN: ₹10,000" 
            medal="/prizes/creative-icon.png" 
            alt="Design Prize" 
          />
        </div>
      )
    },
    {
      title: "TRACK PRIZES",
      description: "BEST TRACK PRIZES for Each Track\n\n₹10,000 per Track"
    }
  ], []);

  useEffect(() => {
    const calculateRotation = () => {
      if (!sectionRef.current) return 0;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - (sectionRect.bottom / sectionRect.height)));
      
      return scrollProgress * 360;
    };

    const updatePosition = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalHeight = sectionRect.height;
      const scrolledPast = -sectionRect.top;
      const lastSectionStart = totalHeight - viewportHeight;

      if (scrolledPast >= lastSectionStart) {
        setStickyPosition('absolute');
        setTranslateY(`${lastSectionStart}px`);
      } else if (scrolledPast <= 0) {
        setStickyPosition('absolute');
        setTranslateY('0');
      } else {
        setStickyPosition('fixed');
        setTranslateY('-50%');
      }

      if (sectionRect.top <= viewportHeight && sectionRect.bottom >= 0) {
        const targetRotation = calculateRotation();
        const diff = targetRotation - lastRotation.current;
        const newRotation = lastRotation.current + (diff * 0.1);
        
        setRotation(newRotation);
        lastRotation.current = newRotation;
      }

      rafRef.current = requestAnimationFrame(updatePosition);
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const mobileDotPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='white' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`;
  
  const desktopDotPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='%23666' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`;

  return (
    <div ref={sectionRef} className="flex h-[310vh] bg-[#080808] text-white relative">
      <div
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: desktopDotPattern,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      />
      
      <div
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          backgroundImage: mobileDotPattern,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      />

      <div
        className="absolute inset-0 w-full h-full bg-[#080808]"
        style={{
          opacity: 0.9,
          maskImage: "radial-gradient(ellipse at center, black, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 100%)"
        }}
      />

      <div 
        className="w-full md:w-2/5 md:relative flex items-center justify-center h-screen transform-gpu"
        style={{
          position: stickyPosition,
          top: stickyPosition === 'fixed' ? '50%' : '0',
          transform: `translateY(${translateY})`,
          left: '0',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <StaticSVG />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <RotatingSVG rotation={rotation} />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 md:hidden" />
      </div>

      <div className="w-full mr-8 md:w-3/5 md:relative ml-auto px-4 md:px-8 py-16 relative z-10">
        {contentSections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            description={section.description}
          >
            {section.content}
          </ContentSection>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollSection;

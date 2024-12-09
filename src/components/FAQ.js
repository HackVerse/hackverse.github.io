import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const FAQ = () => {
  const faqs = [
    {
      value: 'faq-1',
      question: 'Is this hackathon an online event or offline?',
      answer: 'Hackverse 5.0 is an offline event.'
    },
    {
      value: 'faq-2',
      question: 'Who is eligible to apply?',
      answer: 'Only Current Students (both Indian and International) are allowed to apply.'
    },
    {
      value: 'faq-3',
      question: 'Is there any registration fee?',
      answer: 'No. Registrations are completely free of cost.'
    },
    {
      value: 'faq-4',
      question: 'What are the selection criteria?',
      answer: 'We are looking for innovative people who can build crazy, unique solutions to real-world problems. Tell us why you want to be a part of HackVerse, any accomplishments you are proud of, and anything else which could strengthen your application.'
    },
    {
      value: 'faq-5',
      question: 'Can I participate without a team?',
      answer: 'No, Hackverse is a team event. Student teams need a minimum of two members but a maximum of three. However, you can submit the application alone and form teams after selection with other selected participants.'
    },
    {
      value: 'faq-6',
      question: 'Once selected for the hackathon, what should I bring?',
      answer: 'Bring your student ID, laptop, and chargers. A pillow and sleeping bag may be helpful as well. Lots of enthusiasm is a must. Please leave anything illegal at home.'
    },
    {
      value: 'faq-7',
      question: 'What are the perks of participating in this hackathon?',
      answer: 'The hackathon will instantly increase your knowledge and skill level and serve as a platform to socialize with the tech community. Cash prizes and other perks are in store for the winners and cool swag for all participants. For more details, stay tuned to our website ;)'
    },
    {
      value: 'faq-8',
      question: 'Can I participate without a technical background?',
      answer: 'Of course you can! Creativity is independent of your technical skills. You can learn the tools and technologies anytime.'
    },
    {
      value: 'faq-9',
      question: 'Can I start working on my hack before the event?',
      answer: 'No. In the interest of fairness, we don\'t allow students to work on projects before HackVerse begins. However, you can familiarize yourself with the tools and technologies beforehand.'
    },
    {
      value: 'faq-10',
      question: 'Will accommodation and food be provided?',
      answer: 'Yes, absolutely! Accommodation and food will be provided in the college, i.e., NITK itself. We\'ll make sure you don\'t go back on an empty stomach.'
    },
    {
      value: 'faq-11',
      question: 'Will travel reimbursements be provided?',
      answer: 'No, we will not be reimbursing your travel.'
    },
    {
      value: 'faq-12',
      question: 'Where will the hackathon be held?',
      answer: 'The hackathon will be held within the premises of NITK campus.'
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-black py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="leading-normal block mb-2"
          >
            CLEAR YOUR DOUBTS FOR THE HEIST 
          </motion.span>
          <motion.span 
            variants={itemVariants}
            className="bg-[#7B181D] px-4 pb-2 inline-block"
          >
            EXPLORE OUR FAQS
          </motion.span>
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8"
        >
          {/* Left Column */}
          <motion.div 
            variants={containerVariants}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {leftColumnFaqs.map((faq, index) => (
                <motion.div
                  key={faq.value}
                  variants={itemVariants}
                >
                  <AccordionItem
                    value={faq.value}
                    className="border border-red-600/40 px-4 mb-5"
                  >
                    <AccordionTrigger className="text-lg md:text-xl text-white hover:text-red-500 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={containerVariants}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {rightColumnFaqs.map((faq, index) => (
                <motion.div
                  key={faq.value}
                  variants={itemVariants}
                >
                  <AccordionItem
                    value={faq.value}
                    className="border border-red-600/40 px-4 mb-5"
                  >
                    <AccordionTrigger className="text-lg md:text-xl text-white hover:text-red-500 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl text-gray-400">
            Still got questions?{' '}
            <a 
              href="http://t.me/hackverse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9B1B21] hover:text-red-400 underline transition-colors duration-200"
            >
              Join our Telegram Channel
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
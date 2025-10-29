import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const cvLink = "https://drive.google.com/file/d/1zo9ZMSUjjHi4uy3FwJMruqA_8bgcUlJY/view?usp=drive_link"//"https://drive.google.com/file/d/1fW5vaWMxLOT_QkXnRK1lje5zmu8fxRGh/view?usp=drive_link";

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Roja
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
          <motion.a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Roja
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
          <motion.a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

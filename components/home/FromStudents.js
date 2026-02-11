import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TestimonialCard = ({ quote, author, showRightDecorator }) => (
  <motion.div className="flex flex-row gap-[0.5vw]" variants={itemVariants}>
    <motion.div variants={itemVariants}>
      <Image
        className="w-[3vw] h-[3.2vw]"
        src="/images/quote.png"
        alt="quote"
        width={10}
        height={10}
      />
    </motion.div>
    <motion.div className="flex flex-col" variants={itemVariants}>
      <motion.p
        className="w-[48vw] poppins text-[1.8vw] leading-[150%]"
        variants={itemVariants}
      >
        {quote}
      </motion.p>
      <motion.p className="text-[1.25vw]" variants={itemVariants}>
        - {author}
      </motion.p>
    </motion.div>
    {showRightDecorator && (
      <motion.div variants={itemVariants}>
        <Image
          className="w-[10vw] h-auto"
          src="/images/from_students_right.svg"
          alt="quote"
          width={10}
          height={10}
        />
      </motion.div>
    )}
  </motion.div>
);

const FromStudents = () => {
  return (
    <motion.div
      className="pl-[4vw] flex flex-row justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col gap-[3vw] py-[5vw]"
        variants={itemVariants}
      >
        <motion.div className="flex flex-row gap-[3vw]" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <Image
              className="w-[15vw] h-auto"
              src="/images/from_students_left.svg"
              alt="quote"
              width={4000}
              height={4000}
            />
          </motion.div>
          <motion.h1
            className="text-[7.5vw] dk-prince-frog"
            variants={itemVariants}
          >
            From Students
          </motion.h1>
        </motion.div>

        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            showRightDecorator={index === testimonials.length - 1}
          />
        ))}
      </motion.div>
      <motion.div variants={itemVariants}>
        <Image
          className="w-[32.3vw] h-auto object-cover"
          src="/images/fromstudents.jpg"
          alt="quote"
          width={4000}
          height={4000}
        />
      </motion.div>
    </motion.div>
  );
};

export default FromStudents;

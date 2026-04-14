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
  <motion.div className="flex flex-row gap-[0.5rem]" variants={itemVariants}>
    <motion.div variants={itemVariants}>
      <Image
        className="w-[2.75rem] h-[2.875rem]"
        src="/images/quote.png"
        alt="quote"
        width={10}
        height={10}
      />
    </motion.div>
    <motion.div className="flex flex-col" variants={itemVariants}>
      <motion.p
        className="max-w-[43.25rem] poppins text-[1.625rem] leading-[150%]"
        variants={itemVariants}
      >
        {quote}
      </motion.p>
      <motion.p className="text-[1.125rem]" variants={itemVariants}>
        - {author}
      </motion.p>
    </motion.div>
    {showRightDecorator && (
      <motion.div variants={itemVariants}>
        <Image
          className="w-[9rem] h-auto"
          src="/funky_svgs/from_students_right.svg"
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
      className="pl-[3.5rem] flex flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col gap-[2.75rem] py-[4.5rem] flex-1 min-w-0"
        variants={itemVariants}
      >
        <motion.div className="flex flex-row gap-[2.75rem]" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <Image
              className="w-[13.5rem] h-auto"
              src="/funky_svgs/from_students_left.svg"
              alt="quote"
              width={4000}
              height={4000}
            />
          </motion.div>
          <motion.h1
            className="text-[6.75rem] dk-prince-frog"
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
      <motion.div className="flex-shrink-0 self-stretch" variants={itemVariants}>
        <Image
          className="w-[29rem] h-full object-cover"
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

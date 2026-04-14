import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="bg-[#FFDA15] text-black px-[3.5rem] py-[2.75rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-row items-center gap-[4rem]"
        variants={itemVariants}
      >
        <motion.div className="flex flex-col flex-1 min-w-0" variants={itemVariants}>
          <motion.h2
            className="dk-prince-frog text-[2.75rem] mb-[0.875rem]"
            variants={itemVariants}
          >
            The Funky Monkeys
          </motion.h2>
          <motion.p
            className="poppins text-[1.125rem] max-w-[27rem]"
            variants={itemVariants}
          >
            Team 846 - Empowering future engineers through robotics and
            innovation.
          </motion.p>
        </motion.div>
        <motion.div className="flex flex-col flex-shrink-0" variants={itemVariants}>
          <motion.h3
            className="poppins text-[1.375rem] font-bold mb-[0.875rem]"
            variants={itemVariants}
          >
            Quick Links
          </motion.h3>
          <Link
            href="/robots"
            className="poppins text-[1.125rem] hover:text-[#333122] transition-colors mb-[0.5rem]"
          >
            Robots
          </Link>
          <Link
            href="/officers"
            className="poppins text-[1.125rem] hover:text-[#333122] transition-colors mb-[0.5rem]"
          >
            Officers
          </Link>
          <Link
            href="/events"
            className="poppins text-[1.125rem] hover:text-[#333122] transition-colors mb-[0.5rem]"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="poppins text-[1.125rem] hover:text-[#333122] transition-colors"
          >
            Contact
          </Link>
        </motion.div>
        <motion.div className="flex flex-col flex-shrink-0" variants={itemVariants}>
          <motion.h3
            className="poppins text-[1.375rem] font-bold mb-[0.875rem]"
            variants={itemVariants}
          >
            Follow Us
          </motion.h3>
          <motion.div
            className="flex flex-row gap-[1rem]"
            variants={itemVariants}
          >
            <Link href="https://www.youtube.com/@LynbrookRobotics">
              <Image
                src="/icons/social1.svg"
                alt="social"
                width={30}
                height={30}
                className="w-[1.75rem] h-auto cursor-pointer hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://x.com/team846">
              <Image
                src="/icons/social2.svg"
                alt="social"
                width={30}
                height={30}
                className="w-[1.75rem] h-auto cursor-pointer hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://www.instagram.com/firstteam846/">
              <Image
                src="/icons/social3.svg"
                alt="social"
                width={30}
                height={30}
                className="w-[1.75rem] h-auto cursor-pointer hover:scale-110 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="border-t border-gray-600 mt-[2rem] pt-[1rem] text-center"
        variants={itemVariants}
      >
        <motion.p className="poppins text-[1rem]" variants={itemVariants}>
          &copy; 2025 The Funky Monkeys. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

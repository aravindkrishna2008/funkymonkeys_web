import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const Hero = () => {
  return (
    <motion.div
      className="flex  flex-row h-[100%]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-[35vw] bg-[#FFDA15] flex flex-col flex-1 items-end justify-start relative px-5"
        variants={itemVariants}
      >
        <motion.h1
          className="dk-prince-frog text-[9.375rem] max-w-[28.75rem] leading-[85%] text-[#FFF48E] py-[5vw]"
          variants={itemVariants}
        >
          Lynbrook Robotics
        </motion.h1>
        <motion.div variants={itemVariants}>
          <Image
            src={"/images/monkey.png"}
            width={4000}
            height={4000}
            alt="funky monkey image"
            className="-mt-[5vw] mb-[1vw] ml-[1.5vw] max-w-[26.8125rem] w-[33vw] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-[2vw] justify-between max-w-[1280px] w-[63vw]"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col ml-[4vw] gap-[2vw]"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-row align-top"
            variants={itemVariants}
          >
            <motion.div className="flex flex-col" variants={itemVariants}>
              <div className="flex flex-col w-fit">
                <motion.p
                  className="poppins text-[1.5rem] text-[#666666] mt-[9vw]"
                  variants={itemVariants}
                >
                  Team 846
                </motion.p>
                {/* line */}
                <motion.div
                  className="w-full h-[2px] bg-[#666666] mb-[1rem] font-medium"
                  variants={itemVariants}
                ></motion.div>
              </div>
              <motion.h1
                className="dk-prince-frog text-[9.375rem] max-w-[40rem] leading-[85%] mt-[1vw] ml-[-0.25vw]"
                variants={itemVariants}
              >
                The Funky Monkeys
              </motion.h1>
            </motion.div>
            <Image
              src={"/funky_svgs/hero_right.svg"}
              alt="hero right image"
              width={4000}
              height={4000}
              className="w-[9rem] mt-[13vw] h-auto unselectable"
            />
          </motion.div>
          <motion.div
            className="flex flex-row gap-[2vw]"
            variants={itemVariants}
          >
            <Image
              src={"/funky_svgs/hero_left.svg"}
              alt="hero left image"
              width={4000}
              height={4000}
              className="w-[11.75rem] h-auto unselectable justify-self-start align-bottom "
            />
            {/* <motion.div variants={itemVariants}></motion.div> */}
            <motion.div
              className="flex flex-col gap-[1.875vw] align-top justify-start"
              variants={itemVariants}
            >
              <motion.p
                className="poppins text-[1.5rem] leading-[106%] w-[40vw] max-w-[40rem]"
                variants={itemVariants}
              >
                A robotics team located at San Jose, empowering future
                generations with the tools needed to be an engineer.
              </motion.p>
              <motion.div className="flex flex-row" variants={itemVariants}>
                <motion.p
                  className="poppins text-[1.5rem] leading-[106%] font-bold px-[3.25rem] max-w-[15rem] rounded-full py-[1rem] text-[#806D0B] bg-[#FFDA15] cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
                  variants={itemVariants}
                >
                  <Link href="/robots">Robots &#62;</Link>
                </motion.p>
                <motion.p
                  className="poppins text-[1.5rem] leading-[106%] font-bold px-[3.25rem] max-w-[15rem] rounded-full py-[1rem] text-[#808080] cursor-pointer hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
                  variants={itemVariants}
                >
                  <Link href="/officers">Officers &#62;</Link>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className=" mt-auto bg-[#FFF7AB] -z-10 flex flex-row justify-between items-center px-[3rem] py-[1.44rem]"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h1
              className="dk-prince-frog text-[100px] text-[#333122] leading-[85%]"
              variants={itemVariants}
            >
              10+
            </motion.h1>
            <motion.p
              className="text-[#333122] font-medium -mt-2"
              variants={itemVariants}
            >
              Awards Won
            </motion.p>
          </motion.div>
          {/* verticle line with 50% of heigth */}
          <motion.div
            className="w-[2px] h-[60px] bg-[#333122] z-100 opacity-20"
            variants={itemVariants}
          />

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h1
              className="dk-prince-frog text-[100px] text-[#333122] leading-[85%]"
              variants={itemVariants}
            >
              50+
            </motion.h1>
            <motion.p
              className="text-[#333122] font-medium -mt-2"
              variants={itemVariants}
            >
              Members
            </motion.p>
          </motion.div>
          <motion.div
            className="w-[2px] h-[60px] bg-[#333122] z-100 opacity-20"
            variants={itemVariants}
          />
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h1
              className="dk-prince-frog text-[100px] text-[#333122] leading-[85%]"
              variants={itemVariants}
            >
              1k+
            </motion.h1>
            <motion.p
              className="text-[#333122] font-medium -mt-2"
              variants={itemVariants}
            >
              People helped
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

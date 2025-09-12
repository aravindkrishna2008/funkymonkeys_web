import Image from "next/image";

const MonkeyBox = () => {
  return (
    <div className="flex flex-row px-[4vw] py-[5vh]">
      <Image
        src={"/images/monkeybox.png"}
        alt="monkey box"
        width={4000}
        height={4000}
        className="w-[60vw] h-auto"
      />
      <div className="flex flex-col justify-center pl-[3vw] gap-[2vw]">
        <h1 className="dk-prince-frog text-[7.5vw] leading-[85%]">
          Monkey Box
        </h1>
        <p className="text-[1.8vw]">
          Student developed videos to inspire and teach the world around us.
        </p>
        <span className="w-[18vw] text-[1.875vw] bg-[#FFDA15] flex flex-row items-center justify-center py-[1vw] rounded-full text-[#806D0B] font-bold cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
          Show me &#62;
        </span>
      </div>
    </div>
  );
};

export default MonkeyBox;

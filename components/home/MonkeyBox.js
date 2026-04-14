import Image from "next/image";

const MonkeyBox = () => {
  return (
    <div className="flex flex-col md:flex-row px-[3.5rem] py-[4.5rem]">
      <div className="flex-1 min-w-0">
        <Image
          src={"/images/monkeybox.png"}
          alt="monkey box"
          width={4000}
          height={4000}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-center pl-[2.75rem] gap-[2.75rem] flex-shrink-0">
        <h1 className="dk-prince-frog text-[6.75rem] mt-4 ml-0 leading-[85%]">
          Monkey Box
        </h1>
        <p className="text-[1.625rem]">
          Student developed videos to inspire and teach the world around us.
        </p>
        <span className="w-[16rem] text-[1.625rem] bg-[#FFDA15] flex flex-row items-center justify-center py-[0.875rem] rounded-full text-[#806D0B] font-bold cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
          Show me &#62;
        </span>
      </div>
    </div>
  );
};

export default MonkeyBox;

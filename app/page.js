import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2vw">
      <div className="flex flex-row gap-[4vw]">
        <div className="w-[35vw] bg-[#FFDA15] h-[100vh]">
          <h1 className="dk-prince-frog text-[11vw] leading-[85%] text-[#FFE973] py-[5vw] px-[2.5vw] ">
            Lynbrook Robotics
          </h1>
          <Image
            src={"/images/monkey.png"}
            width={4000}
            height={4000}
            alt="funky monkey image"
            className="-mt-[10vw] ml-[5vw] w-[33vw] h-auto"
          />
        </div>
        <div className="flex flex-col gap-[2vw] w-[55vw]">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="poppins text-[1.875vw] mt-[7vw]">Team 846</p>
              {/* line */}
              <div className="w-[10vw] h-[2px] bg-black mt-[0.5vw] mb-[1.5vw] font-medium"></div>
              <h1 className="dk-prince-frog text-[11vw] leading-[85%] mt-[1vw] ml-[-0.25vw] ">
                The Funky Monkeys
              </h1>
            </div>
            <Image
              src={"/images/hero_right.svg"}
              alt="hero right image"
              width={4000}
              height={4000}
              className="w-[11vw] h-auto unselectable"
            />
          </div>
          <div className="flex flex-row gap-[2vw]">
            <Image
              src={"/images/hero_left.svg"}
              alt="hero left image"
              width={4000}
              height={4000}
              className="w-[14.6vw] h-auto unselectable"
            />
            <div className="flex flex-col gap-[1.875vw] align-top justify-start">
              <p className="poppins text-[1.875vw] leading-[106%] w-[40vw]">
                A robotics team located at San Jose, empowering future
                generations with the tools needed to be an engineer.
              </p>
              <div className="flex flex-row">
                <p className="poppins text-[1.875vw] leading-[106%] font-bold px-[4vw] rounded-full py-[1vw] text-[#806D0B] bg-[#FFDA15] cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                  Robots &#62;
                </p>
                <p className="poppins text-[1.875vw] leading-[106%] font-bold px-[2vw] rounded-full py-[1vw] text-[#808080] cursor-pointer hover:translate-y-[-2px] transition-all duration-300 ease-in-out">
                  Officers &#62;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

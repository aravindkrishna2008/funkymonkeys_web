import Image from "next/image";

const RobotSlide = ({ robot_name, image }) => {
  return (
    <div className="bg-white border-8 border-[#FFDA15] rounded-3xl w-[28vw] min-w-[320px] h-[65vh] p-8 shadow-xl flex flex-col justify-center items-center">
      
      {/* Image + Circle */}
      <div className="relative flex justify-center items-center mb-6">
        {/* Bigger yellow circle */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-[#FFDA15] z-0"></div>

        {/* Bigger robot */}
        <Image
          src={image}
          width={300}
          height={300}
          alt={robot_name}
          className="z-10 object-cover w-[220px] h-[220px]"
        />
      </div>

      {/* Robot Name */}
      <h1 className="text-5xl dk-prince-frog mt-4 text-center">
        {robot_name}
      </h1>
    </div>
  );
};

export default RobotSlide;
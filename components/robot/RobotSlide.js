import Image from "next/image";

const RobotSlide = ({ robot_name, image, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="bg-white border-8 border-[#FFDA15] rounded-3xl w-[28vw] min-w-[320px] h-[65vh] p-8 shadow-xl flex flex-col justify-center items-center mb-1 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#FFDA15]/50"
      aria-label={`View details for ${robot_name}`}
    >
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
      <h1 className="text-5xl dk-prince-frog mt-4 text-center">{robot_name}</h1>
    </button>
  );
};

export default RobotSlide;

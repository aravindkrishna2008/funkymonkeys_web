import Image from "next/image";

const MetricBar = ({ filled }) => {
  return (
    <div
      className={`w-[12px] h-4 -skew-x-10 ${
        filled ? "bg-[#FFDA15]" : "bg-[#E0E0E0]"
      }`}
    />
  );
};

const MetricItem = ({ label, filledCount }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xs font-medium text-[#333122]">{label}</p>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <MetricBar key={i} filled={i < filledCount} />
        ))}
      </div>
    </div>
  );
};

const RobotSlide = ({ robot_name, image, stats }) => {
  const metricsRow1 = [
    { label: "Speed", filledCount: stats.speed },
    { label: "Accel.", filledCount: stats.acceleration },
    { label: "OPR", filledCount: stats.opr },
  ];

  const metricsRow2 = [
    { label: "Cycl time", filledCount: stats.cycle_time },
    { label: "Autos", filledCount: stats.autos },
    { label: "Overall", filledCount: stats.overall },
  ];

  return (
    <div className="bg-white border-8 border-[#FFDA15] rounded-3xl w-[24vw] h-[60vh] p-8 shadow-xl flex flex-col justify-center items-center">
      <div className="relative h-[50%] flex justify-center mb-4">
        <Image
          src="/images/Ellipse 9.png"
          width={80}
          height={80}
          alt="circle"
          className="absolute z-0 w-30 h-30 -left-6 top-8 "
        />
        <Image
          src={image}
          width={300}
          height={300}
          alt="robot 1"
          className=" z-10 h-4/5 w-auto object-contain"
        />
      </div>
      <h1 className="text-[3vw] dk-prince-frog mt-[-1vw] font-medium">
        {robot_name}
      </h1>
      <div className=" rounded-2xl mt-2">
        <div className="flex justify-around mb-2 gap-3">
          {metricsRow1.map((metric) => (
            <MetricItem
              key={metric.label}
              label={metric.label}
              filledCount={metric.filledCount}
            />
          ))}
        </div>
        <div className="flex justify-around gap-3">
          {metricsRow2.map((metric) => (
            <MetricItem
              key={metric.label}
              label={metric.label}
              filledCount={metric.filledCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobotSlide;

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
    
    <div className="bg-white border-8 border-[#FFDA15] rounded-3xl w-[24vw] min-w-[300px] h-[60vh] p-8 shadow-xl flex flex-col justify-center items-center">
      <div className="relative h-[50%] flex justify-center items center mb-6">
        <div className = "absolute w-4/5 h-4/5 max-w-[250px] max-h-[250px] aspect-square rounded-full bg-[#FFDA15] z-0"></div>
        <Image
          src={image}
          width={80}
          height={80}
          style = {{width: '50%', height: 'auto', maxWidth: '250px'}}
          alt={robot_name}
          className="z-10 object-contain"
        />
      </div>
      <h1 className="text-4xl dk-prince-frog mt-[4vw] font-medium">
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

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";

// components
import RobotSlide from "@/components/robot/RobotSlide";

// data
import robotsData from "@/data/robots";

// Enhance robots with year if missing
const robots = robotsData.map((robot) => ({
  ...robot,
  year: robot.image.match(/Render(\d+)/)
    ? "20" + robot.image.match(/Render(\d+)/)[1]
    : "Unknown",
}));

const LazyRobotSlide = ({ robot, index }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <motion.div
      className="snap-center shrink-0"
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
          delay: (index % 4) * 0.1,
        },
      }}
      viewport={{ once: true, margin: "200px" }}
      onViewportEnter={() => setHasLoaded(true)}
    >
      {hasLoaded ? (
        <RobotSlide
          robot_name={robot.name}
          image={robot.image}
          stats={robot.stats}
        />
      ) : (
        <div className="w-[24vw] h-[60vh] bg-gray-100/50 rounded-3xl animate-pulse border-8 border-gray-200" />
      )}
    </motion.div>
  );
};

const Robot = () => {
  const [sortBy, setSortBy] = useState("default");
  // selectedYearRange: [min, max] or null for all
  const [selectedYearRange, setSelectedYearRange] = useState(null);

  // Get unique years for filter
  const years = useMemo(() => {
    const allYears = robots
      .map((r) => parseInt(r.year, 10))
      .filter((y) => !isNaN(y));
    const uniqueYears = [...new Set(allYears)].sort((a, b) => a - b); // Ascending for slider
    return uniqueYears;
  }, []);

  const minYear = years[0] || 2000;
  const maxYear = years[years.length - 1] || new Date().getFullYear();

  const filteredAndSortedRobots = useMemo(() => {
    let result = [...robots];

    // Filter by year range
    if (selectedYearRange) {
      const [start, end] = selectedYearRange;
      result = result.filter((r) => {
        const y = parseInt(r.year, 10);
        return !isNaN(y) && y >= start && y <= end;
      });
    }

    // Sort
    if (sortBy !== "default") {
      result.sort((a, b) => {
        // Handle potentially missing stats safely
        const statA = a.stats?.[sortBy] || 0;
        const statB = b.stats?.[sortBy] || 0;
        return statB - statA; // Descending
      });
    }

    return result;
  }, [sortBy, selectedYearRange]);

  return (
    <div className="flex flex-col py-[2vw]">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-2xl mt-[6vw] ml-[4vw]">Meet Our</h1>
          <div className="w-[9vw] h-[2px] bg-[#666666] mt-[0.5vw] ml-[4vw] font-medium"></div>
          <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
            Robots
          </h1>
        </div>
        {/* titles */}
        <Image
          src={"/images/hero_right.svg"}
          alt="hero right image"
          width={4000}
          height={4000}
          className="w-[11vw] h-auto mt-[2.5vw] ml-[4vw] unselectable"
        />
        <Navbar />
      </div>

      {/* Controls */}
      <div className="flex flex-col ml-4 mt-8 gap-4 px-4 sticky left-0">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 p-2">
            <span className="text-sm font-medium ml-2 text-gray-600">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 rounded-lg bg-gray-50 border-none outline-none text-sm font-medium cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="default">Default</option>
              <option value="speed">Speed</option>
              <option value="acceleration">Acceleration</option>
              <option value="opr">OPR</option>
            </select>
          </div>

          <style>{`
            .range-slider-thumb::-webkit-slider-thumb {
              pointer-events: auto;
              appearance: none;
              width: 16px;
              height: 16px;
              background: #FFDA15;
              border-radius: 50%;
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 0 2px rgba(0,0,0,0.2);
            }
            .range-slider-thumb::-moz-range-thumb {
              pointer-events: auto;
              appearance: none;
              width: 16px;
              height: 16px;
              background: #FFDA15;
              border-radius: 50%;
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 0 2px rgba(0,0,0,0.2);
            }
          `}</style>
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl min-w-[320px]">
            <div className="flex flex-col justify-center min-w-[fit-content]">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                Year Range
              </span>
              <span className="text-sm font-bold text-gray-700">
                {selectedYearRange ? selectedYearRange[0] : minYear} -{" "}
                {selectedYearRange ? selectedYearRange[1] : maxYear}
              </span>
            </div>

            <div className="relative w-full h-6 flex items-center flex-1">
              {/* Visual Track */}
              <div className="absolute w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFDA15]"
                  style={{
                    position: "absolute",
                    left: `${
                      (((selectedYearRange ? selectedYearRange[0] : minYear) -
                        minYear) /
                        (maxYear - minYear || 1)) *
                      100
                    }%`,
                    right: `${
                      100 -
                      (((selectedYearRange ? selectedYearRange[1] : maxYear) -
                        minYear) /
                        (maxYear - minYear || 1)) *
                        100
                    }%`,
                  }}
                />
              </div>

              {/* Min Input */}
              <input
                type="range"
                min={minYear}
                max={maxYear}
                value={selectedYearRange ? selectedYearRange[0] : minYear}
                onChange={(e) => {
                  const val = Math.min(
                    parseInt(e.target.value),
                    selectedYearRange ? selectedYearRange[1] : maxYear,
                  );
                  setSelectedYearRange([
                    val,
                    selectedYearRange ? selectedYearRange[1] : maxYear,
                  ]);
                }}
                className="range-slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-20 focus:outline-none"
              />

              {/* Max Input */}
              <input
                type="range"
                min={minYear}
                max={maxYear}
                value={selectedYearRange ? selectedYearRange[1] : maxYear}
                onChange={(e) => {
                  const val = Math.max(
                    parseInt(e.target.value),
                    selectedYearRange ? selectedYearRange[0] : minYear,
                  );
                  setSelectedYearRange([
                    selectedYearRange ? selectedYearRange[0] : minYear,
                    val,
                  ]);
                }}
                className="range-slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-20 focus:outline-none"
              />
            </div>

            {selectedYearRange &&
              (selectedYearRange[0] !== minYear ||
                selectedYearRange[1] !== maxYear) && (
                <button
                  onClick={() => setSelectedYearRange([minYear, maxYear])}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                  title="Reset Filter"
                >
                  ✕
                </button>
              )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-4 pr-8 ml-4 mt-8 overflow-x-scroll scrollbar-hide snap-x snap-mandatory pb-4 min-h-[65vh]">
        <AnimatePresence mode="popLayout">
          {filteredAndSortedRobots.map((robot, index) => (
            <LazyRobotSlide key={robot.name} robot={robot} index={index} />
          ))}
        </AnimatePresence>
        {filteredAndSortedRobots.length === 0 && (
          <div className="flex items-center justify-center w-full h-[60vh] text-gray-400">
            No robots found for the selected criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Robot;

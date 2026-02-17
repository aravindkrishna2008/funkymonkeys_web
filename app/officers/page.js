"use client";

import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"

import OfficerCard from "@/components/officers/OfficerCard";
import { officers as officers2025 } from "@/data/officers/2025";
import { officers as officers2026 } from "@/data/officers/2026";
import { officers as officers2024 } from "@/data/officers/2024";
import { officers as officers2023 } from "@/data/officers/2023";
import { officers as officers2022 } from "@/data/officers/2022";
import { officers as officers2021 } from "@/data/officers/2021";

const Officers = () => {
  const [selectedYear, setSelectedYear] = useState(2026);

  const officersData = {
    2025: officers2025,
    2026: officers2026,
    2024: officers2024,
    2023: officers2023,
    2022: officers2022,
    2021: officers2021,
  };

  const currentOfficers = officersData[selectedYear] || [];

  return (
    <div>
      <div className="flex flex-row">
        <Image
          src={"/funky_svgs/hero_right.svg"}
          alt="hero right image"
          width={400}
          height={400}
          className="w-[11vw] h-auto mt-[2.5vw] ml-[4vw] unselectable rotate-180"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl mt-[6vw] ml-[4vw]">Meet Our</h1>
          <div className="w-[9vw] h-[2px] bg-[#666666] mt-[0.5vw] ml-[4vw] font-medium"></div>
          <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
            Members
          </h1>
        </div>
        <Navbar />
      </div>

      {/* Year Selection Chips */}
      <div className="flex flex-row px-[5vw] gap-4 mt-[2vw]">
        {[2026, 2025, 2024, 2023, 2022, 2021].map((year) => (
          <div
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`cursor-pointer px-6 py-2 flex items-center justify-center text-xl font-medium rounded-full duration-200 hover:-translate-y-1 ${
              selectedYear === year
                ? "bg-[#FFDA15]"
                : "border-[#FFDA15] border-4 hover:scale-105"
            }`}
          >
            {year}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[3vw] mt-[4vw] px-[5vw] mb-[5vw]">
        {currentOfficers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            position={officer.position}
            image={officer.image} // Assuming there might be an image field, otherwise it will just be undefined which is fine
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Officers;

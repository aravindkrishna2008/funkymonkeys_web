"use client"
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Image
          src = "/funky_svgs/sponsor_left.svg"
          alt = "sponsors_left_imaeg"
          width ={4000}
          height={4000}
          className = "w-[11vw] h-auto mt-[3vw] ml-[3vw] unselectable"
        />
        <div className="flex flex-col">
          <h1 className="text-[11vw] dk-prince-frog mt-[6vw] ml-[2vw]">
            Sponsors
          </h1>
        </div>
        <Navbar />
      </div>

      <div className="flex justify-center items-center w-full mt-16 px-6 pb-24">
        <Image
          src="/funky_svgs/Sponsors.svg" 
          alt="Sponsors"
          width={2000}
          height={2000}
          className="w-[80vw] max-w-[1200px] h-auto"
          
        />
      </div>

      <Footer />
    </div>
  );
};
export default Sponsors;
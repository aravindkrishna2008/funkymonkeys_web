"use client"
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-[11vw] dk-prince-frog mt-[5vw] ml-[6vw]">
            Sponsors
          </h1>
        </div>

        <Image
          src={"/images/from_students_right.svg"}
          alt="sponsors_right_image"
          width={4000}
          height={4000}
          className="w-[11vw] h-auto mt-[7vw] ml-[3w] unselectable"
        />

        <Navbar />
      </div>

      <div className="flex justify-center items-center w-full mt-16 px-6 pb-24">
        <Image
          src="/images/Sponsors.svg" 
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
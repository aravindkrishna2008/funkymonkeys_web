"use client"
import Image from "next/image";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import FromStudents from "@/components/home/FromStudents";
import MonkeyBox from "@/components/home/MonkeyBox";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <FromStudents />
      <Image
        src={"/images/zigzag.svg"}
        alt="zigzag"
        width={4000}
        height={4000}
        className="w-[100vw] h-auto mt-[5vw]"
      />
      <MonkeyBox />
      <Newsletter />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import FromStudents from "./Components/FromStudents";
import MonkeyBox from "./Components/MonkeyBox";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

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

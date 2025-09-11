import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}

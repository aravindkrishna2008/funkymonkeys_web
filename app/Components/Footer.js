import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#FFDA15] text-black px-[4vw] py-[3vw]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h2 className="dk-prince-frog text-[3vw] mb-[1vw]">
            The Funky Monkeys
          </h2>
          <p className="poppins text-[1.2vw] w-[30vw]">
            Team 846 - Empowering future engineers through robotics and
            innovation.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="poppins text-[1.5vw] font-bold mb-[1vw]">
            Quick Links
          </h3>
          <a
            href="#"
            className="poppins text-[1.2vw] hover:text-[#333122] transition-colors mb-[0.5vw]"
          >
            Robots
          </a>
          <a
            href="#"
            className="poppins text-[1.2vw] hover:text-[#333122] transition-colors mb-[0.5vw]"
          >
            Officers
          </a>
          <a
            href="#"
            className="poppins text-[1.2vw] hover:text-[#333122] transition-colors mb-[0.5vw]"
          >
            Events
          </a>
          <a
            href="#"
            className="poppins text-[1.2vw] hover:text-[#333122] transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="poppins text-[1.5vw] font-bold mb-[1vw]">Follow Us</h3>
          <div className="flex flex-row gap-[1vw]">
            <Image
              src="/images/social1.svg"
              alt="social"
              width={30}
              height={30}
              className="w-[2vw] h-auto cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src="/images/social2.svg"
              alt="social"
              width={30}
              height={30}
              className="w-[2vw] h-auto cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src="/images/social3.svg"
              alt="social"
              width={30}
              height={30}
              className="w-[2vw] h-auto cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-[2vw] pt-[1vw] text-center">
        <p className="poppins text-[1vw]">
          &copy; 2025 The Funky Monkeys. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

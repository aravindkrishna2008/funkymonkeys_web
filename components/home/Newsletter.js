import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="px-[4vw] py-[5vw]">
      <div className="flex flex-row justify-between items-start w-[100%]">
        <Image
          src="/images/newsletter_left.svg"
          alt="newsletter left"
          width={4000}
          height={4000}
          className="w-[21vw] h-auto"
        />
        <Image
          src="/images/newsletter_right.svg"
          alt="newsletter right"
          width={4000}
          height={4000}
          className="w-[14.6vw] h-auto"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="dk-prince-frog text-[7.5vw] text-center">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-[1.875vw] text-center -mt-[2can yvw]">
          Drop us your email below to receive our newsletters about how our team
          is doing!
        </p>
        <div className="flex flex-row justify-center mt-[2.7vw]">
          <input
            type="email"
            placeholder="Email Address"
            className="py-[1vw] w-[60vw] rounded-l-full pl-[4vw] text-[2vw] focus:outline-none border-[#FFD600] border-4"
          />
          <div className="h-auto bg-[#FFD600] w-[25vw] rounded-r-full text-[2vw] font-bold text-center flex flex-row items-center justify-center cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
            Subscribe &#62;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

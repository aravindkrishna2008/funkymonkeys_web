import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="px-[3.5rem] py-[4.5rem]">
      <div className="flex flex-row justify-between items-start">
        <Image
          src="/funky_svgs/newsletter_left.svg"
          alt="newsletter left"
          width={4000}
          height={4000}
          className="w-[19rem] h-auto"
        />
        <Image
          src="/funky_svgs/newsletter_right.svg"
          alt="newsletter right"
          width={4000}
          height={4000}
          className="w-[13.25rem] h-auto"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="dk-prince-frog text-[6.75rem] text-center">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-[1.625rem] text-center">
          Drop us your email below to receive our newsletters about how our team
          is doing!
        </p>
        <div className="flex flex-row justify-center mt-[2.5rem] max-w-[64rem] mx-auto w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="py-[0.875rem] flex-1 rounded-l-full pl-[3.5rem] text-[1.75rem] focus:outline-none border-[#FFD600] border-4"
          />
          <div className="bg-[#FFD600] w-[22rem] rounded-r-full text-[1.75rem] font-bold text-center flex flex-row items-center justify-center cursor-pointer hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
            Subscribe &#62;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

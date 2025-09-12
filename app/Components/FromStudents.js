import Image from "next/image";

const FromStudents = () => {
  return (
    <div className="pl-[4vw] flex flex-row justify-between">
      <div className="flex flex-col gap-[3vw] py-[5vw]">
        <div className="flex flex-row gap-[3vw]">
          <Image
            className="w-[15vw] h-auto"
            src="/images/from_students_left.svg"
            alt="quote"
            width={4000}
            height={4000}
          />
          <h1 className="text-[7.5vw] dk-prince-frog">From Students</h1>
        </div>
        <div className="flex flex-row gap-[0.5vw]">
          <Image
            className="w-[3vw] h-[3.2vw]"
            src="/images/quote.png"
            alt="quote"
            width={10}
            height={10}
          />
          <div className="flex flex-col">
            <p className="w-[48vw] poppins text-[1.8vw] leading-[150%]">
              Throughout my time on the team, I've gained both technical and
              non-technical experiences that have shaped who I am, not just
              during high school, but in everyday life as well.
            </p>
            <p className="text-[1.25vw]">- Dhananjay Khulbe</p>
          </div>
        </div>
        <div className="flex flex-row gap-[0.5vw]">
          <Image
            className="w-[3vw] h-[3.2vw]"
            src="/images/quote.png"
            alt="quote"
            width={10}
            height={10}
          />
          <div className="flex flex-col">
            <p className="w-[48vw] poppins text-[1.8vw] leading-[150%]">
              Team 846 wasn’t just a robotics team. It was a second family. It
              challenged me, believed in me, and helped shape me into someone I
              never imagined I could be.
            </p>
            <p className="text-[1.25vw]">- Sanjana Kamath </p>
          </div>
          <Image
            className="w-[10vw] h-auto"
            src="/images/from_students_right.svg"
            alt="quote"
            width={10}
            height={10}
          />
        </div>
      </div>
      <Image
        className="w-[32.3vw] h-auto object-cover"
        src="/images/fromstudents.jpg"
        alt="quote"
        width={4000}
        height={4000}
      />
    </div>
  );
};

export default FromStudents;

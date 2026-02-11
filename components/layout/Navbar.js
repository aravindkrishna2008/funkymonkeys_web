const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center absolute right-[3.5vw] top-[2.5vw]">
      <div></div>
      <div className="flex flex-row space-x-4 transition-all duration-300 ease-in-out text-[1.25vw] ">
        <a href="#" className="hover:underline text-[1.5vw]">
          MONKEY HUB
        </a>
        <a href="#" className=" hover:underline text-[1.5vw]">
          FUNKY CORNER
        </a>
        <a href="#" className=" hover:underline text-[1.5vw]">
          SCOUTING
        </a>
      </div>
    </div>
  );
};

export default Navbar;

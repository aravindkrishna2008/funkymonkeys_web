import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center absolute right-[3.5vw] top-[2.5vw] z-50">
      <div></div>
      <div className="flex flex-row space-x-4 transition-all duration-300 ease-in-out text-[1.25vw] items-start">
        <div className="relative group">
          <Link href="#" className="hover:underline text-[1.5vw]">
            MONKEY HUB
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 pt-4 hidden group-hover:block w-max">
            <div className="flex flex-col bg-black/5 backdrop-blur-lg rounded-2xl p-4 space-y-3 text-black/40 shadow-2xl border border-white/10">
              <Link
                href="/officers"
                className="hover:text-gray-800 transition-colors px-2 text-center  tracking-wide"
              >
                OUR TEAM
              </Link>
              <Link
                href="/robots"
                className="hover:text-gray-800 transition-colors px-2 text-center  tracking-wide"
              >
                ROBOTS
              </Link>
              <Link
                href="/calendar"
                className="hover:text-gray-800  transition-colors px-2 text-center  tracking-wide"
              >
                CALENDAR
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link href="#" className=" hover:underline text-[1.5vw]">
            FUNKY CORNER
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 pt-4 hidden group-hover:block w-max">
            <div className="flex flex-col bg-black/5 backdrop-blur-lg rounded-2xl p-4 space-y-3 text-black/40 shadow-2xl border border-white/10">
              <Link
                href="/newsletters"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                NEWSLETTERS
              </Link>
              <Link
                href="/monkeybox"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                MONKEYBOX
              </Link>
              <Link
                href="/media"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                MEDIA
              </Link>
            </div>
          </div>
        </div>
        <Link href="#" className=" hover:underline text-[1.5vw]">
          SCOUTING
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

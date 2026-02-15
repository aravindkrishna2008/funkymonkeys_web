import Image from "next/image"
import Navbar from "../Components/Navbar"
const Robot = () => {
    return(
        <div className="flex flex-col md:flex-row px-[4vw] py-[5vh]">
          <Image
            src={"/images/monkeybox.png"}
            alt="monkey box"
            width={4000}
            height={4000}
            className="w-[60vw] h-auto"
          />
        </div>
    )
}
export default Calendar
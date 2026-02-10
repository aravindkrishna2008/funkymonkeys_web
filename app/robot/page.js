import Image from "next/image"
import Navbar from "../Components/Navbar"
const Robot = () => {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col">
            <h1 className="text-2xl mt-[6vw] ml-[4vw]">
                Meet Our
            </h1>
            <div
                className="w-[9vw] h-[2px] bg-[#666666] mt-[0.5vw] ml-[4vw] font-medium"
              ></div>
            <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
                Robots
                </h1> 
                </div>
            {/* titles */}
            <Image
                src={"/images/hero_right.svg"}
                alt="hero right image"
                width={4000}
                height={4000}
                className="w-[11vw] h-auto mt-[2.5vw] ml-[4vw] unselectable"
            />
            <Navbar/>
        </div>
        <div className = "w-full flex ml-4 mt-8">
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify-center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width={80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-6 top-8 "/>
                        <Image
                            src = "/images/RobotRender25.png"
                            width={300}
                            height={300}
                            alt = "robot 1"
                            className = "relative z-10 w-40 h-auto"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog mt-[-1vw] font-medium">
                        Monkey D' Luffy
                    </h1>
        
                </div>
            <div className = "w-full flex ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify-center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                        <Image
                            src = "/images/RobotRender24.png"
                            width = {80}
                            height = {80}
                            alt = "robot 2"
                            className = "relative z-10 w-40 h-auto top-5"/>
                            </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[1vw] font-medium">
                            Uptown Funk
                        </h1>
                </div>
            </div>
            <div className = "w-full flex ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                        <Image 
                            src="/images/RobotRender23.png"
                            width = {80}
                            height = {80}
                            alt = "robot 3"
                            className = "relative z-10 w-40 h-auto -left-4"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[0vw] font-medium">
                            Cone Kong
                        </h1>
                </div>
                </div>
            <div className = "w-full flex ml-1 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "robot 4"
                                className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                            <Image 
                                src = "/images/RobotRender22.png"
                                width = {80}
                                height = {80}
                                alt = "robot 4"
                                className = "relative z-10 w-40 h-auto -left-4 -top-2"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog -mt-[1.8vw] font-medium">
                            Furious George
                        </h1>
                    </div>
                </div>
            <div className = "w-full flex mt-8 ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width={80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender20.png"
                            width={80}
                            height = {80}
                            alt = "robot 5"
                            className = "relative z-10 w-40 h-auto -left-4 top-8"/>
                    </div>
                    <h1 className = "text-[1.8vw] dk-prince-frog mt-[1vw] font-medium">
                        The Droid You're Looking for
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image 
                            src = "/images/RobotRender19.png"
                            width = {80}
                            height = {80}
                            alt = "robot 6"
                            className = "relative z-10 w-35 h-60 -left-4 -top-8"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog -mt-[6vw] font-medium">
                        SpaceRex
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-1">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image 
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender18.png"
                            width={80}
                            height ={80}
                            alt = "robot 7"
                            className = "relative z-10 w-40 h-auto -left-4 -top-3"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog -mt-[2vw] font-medium">
                        Wes
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image 
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender17.png"
                            width={80}
                            height ={80}
                            alt = "robot 8"
                            className = "relative z-10 w-40 h-auto left-2 top-18"/>
                    </div>  
                    <h1 className = "text-[3vw] dk-prince-frog mt-[3.8vw] font-medium">
                        Punk Monkey
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image 
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender16.png"
                            width={80}
                            height ={80}
                            alt = "robot9"
                            className = "relative z-10 w-40 h-auto left-2 top-18"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog mt-[6.5vw] font-medium">
                        Monkey Python
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-1">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify center mb-4">
                        <Image 
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender15.png"
                            width={80}
                            height ={80}
                            alt = "robot 7"
                            className = "relative z-10 w-40 h-auto -left-4 top-6"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog mt-[2vw] font-medium">
                        Junky Monkey
                    </h1>
                </div>
            </div>
            <div className = "w-full flex mt-8 ml-4">
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify-center mb-4">
                        <Image 
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image 
                            src = "/images/RobotRender14.png"
                            width = {80}
                            height = {80}
                            alt = "robot11"
                            className = "relative z-10 w-50 h-auto top-8"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog mt-[4vw] font-medium">
                        Funk Cannon
                    </h1>
                    </div>
                </div>
                <div className = "w-full flex mt-8 ml-4">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                            <Image
                                src = "/images/RobotRender13.png"
                                width = {80}
                                height = {80}
                                alt = "robot12"
                                className = "relative z-10 w-50 h-auto top-1"/>
                        </div>
                        <h1 className = "text-[2vw] dk-prince-frog font-medium">
                            Ultimate Funky Object
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex mt-8 ml-1"> 
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                            <Image
                                src = "/images/RobotRender12.png"
                                width = {80}
                                height = {80}
                                alt = "robot13"
                                className = "relative z-10 w-50 h-auto"/>
                        </div>
                        <h1 className = "text-[2vw] dk-prince-frog -mt-[1vw] font-medium">
                            Tail of the Monkey
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex mt-8 ml-4">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                            <Image
                                src = "/images/RobotRender11.png"
                                width = {80}
                                height = {80}
                                alt = "robot14"
                                className = "relatve z-10 w-30 h-60 -mt-[4vw] ml-[3vw]"/>
                        </div>
                        <h1 className = "text-[2vw] dk-prince-frog -mt-[1.6vw] font-medium">
                            Hand of the Monkey
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-4 mt-8">
            
                <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                    <div className = "relative flex justify-center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width={80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8 "/>
                        <Image
                            src = "/images/RobotRender10.png"
                            width={300}
                            height={300}
                            alt = "robot15"
                            className = "relative z-10 w-40 h-auto"/>
                    </div>
                    <h1 className = "text-[1.8vw] dk-prince-frog mt-[4.6vw] font-medium">
                        Soccer Chipmbot Extreme
                    </h1>
        
                </div>
                </div>
                <div className = "w-full flex ml-1 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center justify-between">
                        <div className = "relative flex justify-center mb-4">
                        <Image
                            src = "/images/Ellipse 9.png"
                            width = {80}
                            height = {80}
                            alt = "circle"
                            className = "absolute z-0 w-30 h-30 -left-4 top-8"/>
                        <Image
                            src = "/images/RobotRender09.png"
                            width = {80}
                            height = {80}
                            alt = "robot 16"
                            className = "relative z-10 w-50 h-auto top-5 right-6"/>
                            </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[1vw] font-medium">
                            Monkey
                        </h1>
                </div>
                </div>
                <div className = " w-full flex ml-4 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center justify-between">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender08.png"
                                width = {80}
                                height = {80}
                                alt = "robot17"
                                className = "relative w-30 h-40"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog font-medium">
                            Howler
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-4 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender07.png"
                                width = {80}
                                height = {80}
                                alt = "robot18"
                                className = "relative z-10 w-30 h-auto"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[1vw] font-medium">
                            SpiderMonkey
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-1 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender06.png"
                                width = {80}
                                height = {80}
                                alt = "robot19"
                                className = "relative z-10 w-30 h-auto"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog -mt-[1vw] font-medium">
                            Escargo
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-4 mt-8">
                    <div className = "bg-white border-yellow-400 border-2 rounded-3xl w-[24vw] h-[28vw] p-8 shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image 
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender05.png"
                                width = {80}
                                height = {80}
                                alt = "robot20"
                                className = "relative z-10 w-30 h-auto"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[4vw] font-medium">
                            TetraBot
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-4 mt-8">
                    <div className = "bg-white border-yellow-400 border-2 rounded-3xl p-8 w-[24vw] h-[28vw] shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender04.png"
                                width = {80}
                                height = {80}
                                alt = "robot21"
                                className = "relative z-10 w-30 h-auto"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog mt-[0.5vw] font-medium">
                            BikeBot
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-1 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl p-8 w-[24vw] h-[28vw] shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image 
                                src = "/images/RobotRender03.png"
                                width = {80}
                                height = {80}
                                alt = "robot22"
                                className = "relative z-10 w-40 h-auto -top-6"/>
                        </div>
                        <h1 className = "text-[3vw] dk-prince-frog -mt-[2vw] font-medium">
                            2003
                        </h1>
                    </div>
                </div>
                <div className = "w-full flex ml-4 mt-8">
                    <div className = "bg-white border-2 border-yellow-400 rounded-3xl p-8 w-[24vw] h-[28vw] shadow-xl flex flex-col items-center">
                        <div className = "relative flex justify-center mb-4">
                            <Image
                                src = "/images/Ellipse 9.png"
                                width = {80}
                                height = {80}
                                alt = "circle"
                                className = "absolute z-0 w-30 h-30 -left-6 top-8"/>
                            <Image
                                src = "/images/RobotRender02.png"
                                width = {80}
                                height = {80}
                                alt = "robot23"
                                className = "relative z-10 w-40 h-auto -top-4"/>
                    </div>
                    <h1 className = "text-[3vw] dk-prince-frog -mt-[2vw] font-medium">
                        2002
                    </h1>
                </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Robot



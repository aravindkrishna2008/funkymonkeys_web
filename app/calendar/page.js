import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import { calender } from "@/data/calender"

// function to group events by date
const groupEventsByDate = (events) => {
  return events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});
};

const Day = (props) => {
  return (
    <div className="flex flex-col flex-1 basis-[calc((100%-3rem)/7)] min-h-[120px] gap-1.25 p-2.5 border-3 border-[#FFDE9E] rounded-3xl hover:bg-[#EFF6FF]">
      <div className="font-bold text-lg">{props.day_number}</div>
      <div className="poppins text-[12px] gap-2.5">
        {props.tasks.map((task, index) => (
          <div key={index} className="text-xs truncate">{task.title}</div>
        ))}
      </div>
    </div>
  )
}

const Calender = () => {
    //group events by date
    const groupedEvents = groupEventsByDate(calender);
    
    return(
        <div>
          <Navbar />
          <div className="flex flex-col px-[4vw] py-[5vh]">
          <svg width="255" height="123" viewBox="0 0 255 123" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="255" width="13.2734" height="255" transform="rotate(90 255 0)" fill="#FFDA15"/>
          <rect x="14.2192" y="13.2734" width="109.727" height="14.2193" transform="rotate(90 14.2192 13.2734)" fill="#FFDA15"/>
          <circle cx="74.2937" cy="65.259" r="25" transform="rotate(-90 74.2937 65.259)" fill="#FFDA15"/>
          <circle cx="148.293" cy="65.259" r="25" transform="rotate(-90 148.293 65.259)" fill="#FFDA15"/>
          <circle cx="222.293" cy="65.259" r="25" transform="rotate(-90 222.293 65.259)" fill="#FFDA15"/>
          </svg>

          <div className="text-[7.5vw] poppins mb-4">
            Calender
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(groupedEvents).map(([date, events]) => (
              <Day
                key={date}
                day_number={date.substring(date.length - 2)}
                tasks={events}
              />
            ))}
          </div>
          
        </div>
        </div>
        
    )
}
export default Calender
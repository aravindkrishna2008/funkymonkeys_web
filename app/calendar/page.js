'use client'
import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar"

// function to group events by date
const groupEventsByDate = (events) => {
  return events.reduce((acc, event) => {
    const [year, month, day] = event.date.split('-').map(Number);
    const monthIndex = month - 1;
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][monthIndex]) {
      acc[year][monthIndex] = {};
    }
    if (!acc[year][monthIndex][event.date]) {
      acc[year][monthIndex][event.date] = [];
    }
    acc[year][monthIndex][event.date].push(event);
    return acc;
  }, {});
};

const fillMissingDays = (year, month, eventsMap) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const filledDays = {};
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    filledDays[dateString] = eventsMap[dateString] || [];
  }
  
  return filledDays;
};

const getTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
}

const Day = (props) => {
  return (
    <div className="flex flex-col flex-1 basis-[calc((100%-3rem)/7)] max-w-[calc((100%-3rem)/7)] min-h-[120px] gap-1.25 p-2.5 border-3 border-[#FFDE9E] rounded-xl hover:bg-[#EFF6FF] shadow-[0px_7.5px_0px_-3px_rgba(0,_0,_0,_0.1)]">
      <div className="font-bold text-lg">{props.day_number}</div>
      <div className="poppins text-wrap text-[12px] gap-2.5">
        {props.tasks.length > 0 ? (
          props.tasks.map((task, index) => (
            <div key={index} className="text-xs">
              {`${task.title} - ${getTime(task.start)}`}
            </div>
          ))
        ) : (
          <div className="text-xs text-gray-400">No events</div>
        )}
      </div>
    </div>
  )
}

const Calender = () => {
    const [currDate, setCurrDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch events from Google Calendar API
    useEffect(() => {
      const fetchEvents = async () => {
        setLoading(true);
        try {
          // Get first and last day of current month
          const year = currDate.getFullYear();
          const month = currDate.getMonth();
          const timeMin = new Date(year, month, 1).toISOString();
          const timeMax = new Date(year, month + 1, 0, 23, 59, 59).toISOString();

          const response = await fetch(
            `/api/calendar?timeMin=${timeMin}&timeMax=${timeMax}`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch events');
          }

          const data = await response.json();
          setEvents(data.events);
          setError(null);
        } catch (err) {
          console.error('Error fetching events:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchEvents();
    }, [currDate]);

    const groupedEvents = useMemo(() => groupEventsByDate(events), [events]);
    
    const currEvents = useMemo(() => {
      const year = currDate.getFullYear();
      const month = currDate.getMonth();
      const monthEvents = groupedEvents[year]?.[month] || {};
      
      return fillMissingDays(year, month, monthEvents);
    }, [currDate, groupedEvents]);

    const CalenderNav = () => {
      return (
        <div className="flex justify-left items-center py-4 gap-5">
          <div className="flex rounded-8px] poppins text-m bg-[#F5F5F5] px-2">
            {`${currDate.toLocaleString('en-US', { month: 'short' })}  ${currDate.getFullYear()}`}
          </div>

          <button onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setCurrDate(newDate);
          }}>
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9805 24.808L29.9379 15.6768C30.4589 15.2426 31.25 15.6131 31.25 16.2914V33.7086C31.25 34.3869 30.4589 34.7574 29.9379 34.3232L18.9805 25.1921C18.8605 25.0921 18.8605 24.9079 18.9805 24.808Z" fill="#222222"/>
            </svg>
          </button>

          <button onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setCurrDate(newDate);
          }}>
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.0195 25.192L20.0621 34.3232C19.5411 34.7574 18.75 34.3869 18.75 33.7086V16.2914C18.75 15.6131 19.5411 15.2426 20.0621 15.6768L31.0195 24.8079C31.1395 24.9079 31.1395 25.0921 31.0195 25.192Z" fill="#222222"/>
            </svg>
          </button>
        </div>
      )
    }

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

            <CalenderNav/>

            {loading && <div className="text-center py-4">Loading events...</div>}
            {error && <div className="text-center py-4 text-red-500">Error: {error}</div>}
            
            {!loading && !error && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(currEvents).map(([date, events]) => {
                  const dayNumber = parseInt(date.split('-')[2], 10);
                  return (
                    <Day
                      key={date}
                      day_number={dayNumber}
                      tasks={events}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
    )
}
export default Calender
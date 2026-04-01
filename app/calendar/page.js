'use client'

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";



const groupEventsByDate = (events) => {
  return events.reduce((acc, event) => {
    const [year, month] = event.date.split('-').map(Number);
    const monthIndex = month - 1;

    if (!acc[year]) acc[year] = {};
    if (!acc[year][monthIndex]) acc[year][monthIndex] = {};
    if (!acc[year][monthIndex][event.date]) acc[year][monthIndex][event.date] = [];

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
};



const Day = ({ day_number, tasks }) => {
  return (
    <div className="
      flex flex-col
      min-h-[110px]
      p-3
      border-2 border-[#FFDE9E]
      rounded-xl
      shadow-md
      bg-white
      hover:bg-[#EFF6FF]
      transition
    ">
      <div className="font-bold text-lg mb-2">
        {day_number}
      </div>

      <div className="text-xs text-gray-700 max-h-24 overflow-y-auto space-y-1">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index}>
              {task.title} – {getTime(task.start)}
            </div>
          ))
        ) : (
          <div className="text-gray-400">No events</div>
        )}
      </div>
    </div>
  );
};



const Calender = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
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
      <div className="flex items-center justify-between py-4">

        <button
          onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setCurrDate(newDate);
          }}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>

        <div className="text-sm sm:text-base bg-[#F5F5F5] px-4 py-1 rounded-lg font-medium">
          {`${currDate.toLocaleString('en-US', { month: 'long' })} ${currDate.getFullYear()}`}
        </div>

        <button
          onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setCurrDate(newDate);
          }}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          →
        </button>

      </div>
    );
  };

  

  return (
    <div>
      <Navbar />

      <div className="flex flex-col px-4 sm:px-8 py-8">

        
        <svg
          viewBox="0 0 255 123"
          className="w-full max-w-[255px] h-auto mb-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="255" width="13.2734" height="255" transform="rotate(90 255 0)" fill="#FFDA15"/>
          <rect x="14.2192" y="13.2734" width="109.727" height="14.2193" transform="rotate(90 14.2192 13.2734)" fill="#FFDA15"/>
          <circle cx="74.2937" cy="65.259" r="25" fill="#FFDA15"/>
          <circle cx="148.293" cy="65.259" r="25" fill="#FFDA15"/>
          <circle cx="222.293" cy="65.259" r="25" fill="#FFDA15"/>
        </svg>

        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Calendar
        </div>

        <CalenderNav />

        {loading && <div className="text-center py-4">Loading events...</div>}
        {error && <div className="text-center py-4 text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            lg:grid-cols-7
            gap-3
          ">
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
  );
};

export default Calender;

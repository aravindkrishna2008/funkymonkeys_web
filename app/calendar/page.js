"use client";

import {
  forwardRef,
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const groupEventsByDate = (events) => {
  const groupedEvents = events.reduce((acc, event) => {
    const [year, month] = event.date.split("-").map(Number);
    const monthIndex = month - 1;

    if (!acc[year]) acc[year] = {};
    if (!acc[year][monthIndex]) acc[year][monthIndex] = {};
    if (!acc[year][monthIndex][event.date])
      acc[year][monthIndex][event.date] = [];

    acc[year][monthIndex][event.date].push(event);
    return acc;
  }, {});

  Object.values(groupedEvents).forEach((yearEvents) => {
    Object.values(yearEvents).forEach((monthEvents) => {
      Object.values(monthEvents).forEach((dayEvents) => {
        dayEvents.sort((a, b) => getEventStartTime(a) - getEventStartTime(b));
      });
    });
  });

  return groupedEvents;
};

const fillMissingDays = (year, month, eventsMap) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const filledDays = {};

  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    filledDays[dateString] = eventsMap[dateString] || [];
  }

  return filledDays;
};

const isToday = (dateString) => {
  const today = new Date();

  const formattedToday = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return dateString === formattedToday;
};

const getDateParts = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const isCurrentWeekday = (weekday, currentDate) => {
  const today = new Date();
  const isViewingCurrentMonth =
    currentDate.getFullYear() === today.getFullYear() &&
    currentDate.getMonth() === today.getMonth();

  return (
    isViewingCurrentMonth &&
    weekday ===
      today.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
  );
};

const getMondayBasedWeekdayOffset = (date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
};

const WeekdayHeaders = ({ compact, currentDate }) => {
  return (
    <div
      className={`grid grid-cols-7 gap-3 ${
        compact ? "" : "hidden lg:grid"
      }`}
    >
      {WEEKDAYS.map((weekday) => (
        <div
          key={weekday}
          className={`flex items-center justify-center rounded-2xl font-medium text-2xl text-black/50 ${
            compact ? "h-14 sm:h-16" : "h-[90px]"
          }`}
          style={{
            backgroundColor: isCurrentWeekday(weekday, currentDate)
              ? "#FFDA15"
              : "#F2F2F2",
            boxShadow:
              "-9px -7px 4px 0 rgba(255, 255, 255, 0.25) inset, 0 5px 4.9px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          {weekday}
        </div>
      ))}
    </div>
  );
};

const getEventInitials = (title) => {
  if (!title) return "";

  const normalizedTitle = title.trim().toLowerCase().replace(/\s+/g, " ");

  if (normalizedTitle === "worksession" || normalizedTitle === "work session") {
    return "WS";
  }

  return title
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const getCompactCountTextColor = ({ date, isSelected }) => {
  if (isSelected) return "#FFFFFF";
  if (isToday(date)) return "#FFDA15";

  return "#FFFFFF";
};

const CompactEventIndicators = ({ tasks, date, isSelected }) => {
  if (tasks.length === 0) return null;

  const visibleTasks = tasks.slice(0, 1);
  const remainingTasks = tasks.length - visibleTasks.length;
  const circleColor = isToday(date) ? "#665708" : "#FFDA15";

  return (
    <div className="absolute left-1/2 top-[6px] flex -translate-x-1/2 items-center justify-center gap-1">
      {visibleTasks.map((task, index) => (
        <div
          key={task.id || `${task.title}-${index}`}
          className={`flex h-8 w-8 items-center justify-center text-xs font-bold sm:h-10 sm:w-10 sm:text-sm lg:h-9 lg:w-9 lg:text-xs xl:h-10 xl:w-10 xl:text-sm ${
            isSelected
              ? ""
              : "rounded-full border-2 bg-transparent uppercase"
          }`}
          style={{
            borderColor: circleColor,
            color: circleColor,
          }}
          title={task.title}
        >
          {isSelected
            ? getEventInitials(task.title).toLowerCase()
            : getEventInitials(task.title)}
        </div>
      ))}

      {remainingTasks > 0 && (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold sm:h-11 sm:w-11 sm:text-sm lg:h-10 lg:w-10 lg:text-xs xl:h-11 xl:w-11 xl:text-sm"
          style={{
            backgroundColor: circleColor,
            color: getCompactCountTextColor({ date, isSelected }),
          }}
        >
          +{remainingTasks}
        </div>
      )}
    </div>
  );
};

const Day = ({ day_number, tasks, date, onClick, isSelected, compact }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        borderRadius: isSelected ? "9999px" : "1.5rem",
        scale: isSelected ? 0.95 : 1,
      }}
      whileHover={isSelected ? { scale: 0.95 } : { y: -4 }}
      transition={{
        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        borderRadius: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`relative flex flex-col items-center justify-between aspect-square border-4 cursor-pointer overflow-hidden transform-gpu transition-colors duration-300 ease-out ${
        compact ? "p-1 sm:p-2" : "p-3"
      }
      ${
        isSelected
          ? "bg-gradient-to-b from-[#FFF1CD] to-white border-[#FFDA15] hover:bg-[#FFE86D] hover:border-[#FFE86D]"
          : isToday(date)
          ? "bg-[#FFDA15] border-[#FFDA15] hover:bg-[#FFE86D] hover:border-[#FFE86D]"
          : "bg-white border-[#FFDA15] hover:border-[#FFE86D]"
      }
    `}
      style={{ willChange: "transform, border-radius" }}
    >
      {compact && !isSelected && (
        <CompactEventIndicators
          tasks={tasks}
          date={date}
          isSelected={isSelected}
        />
      )}

      {!compact && (
        <div className="text-xs text-gray-700 max-h-24 px-[4px] py-[8px] overflow-y-auto space-y-1 w-full min-w-0">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-1 relative h-fit w-full min-w-0 overflow-hidden"
              >
                <p className="text-black capitalize text-sm font-medium whitespace-nowrap px-px shrink-0">
                  {formatTimeRange(task.start, task.end)[0]}{" "}
                </p>
                <div className="h-[0.8em] rounded-full w-px bg-black opacity-50 shrink-0" />
                <p className="text-black text-sm whitespace-nowrap min-w-0 flex-1 overflow-hidden text-ellipsis">
                  {task.title}
                </p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      )}
      <div
        className={`font-medium text-[#000000] opacity-60 ${
          compact ? "mb-[6px] mt-auto text-xl sm:text-2xl" : "text-3xl mb-2"
        }`}
      >
        {day_number}
      </div>
    </motion.div>
  );
};
const formatTimeRange = (start, end) => {
  const startDate = parseCalendarDate(start);
  const endDate = parseCalendarDate(end);
  const startStr = formatCompactTime(startDate);
  const endStr = formatCompactTime(endDate);
  return [startStr, endStr];
};

const formatCompactTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;

  if (minute === 0) {
    return `${hour12}${period}`;
  }

  return `${hour12}:${String(minute).padStart(2, "0")}`;
};

const formatFullTime = (dateString) => {
  const date = parseCalendarDate(dateString);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  const time = minute === 0 ? `${hour12}` : `${hour12}:${String(minute).padStart(2, "0")}`;

  return { time, period };
};

const formatFullTimeRange = (start, end) => {
  const startTime = formatFullTime(start);
  const endTime = formatFullTime(end);

  if (startTime.period === endTime.period) {
    return `${startTime.time}-${endTime.time}${endTime.period}`;
  }

  return `${startTime.time}${startTime.period}-${endTime.time}${endTime.period}`;
};

const HOUR_HEIGHT = 40;
const MIN_EVENT_HEIGHT = 64;

const parseCalendarDate = (dateString) => {
  if (!dateString) return new Date(NaN);

  if (!dateString.includes("T")) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  return new Date(dateString);
};

const getEventStartTime = (event) => {
  const start = parseCalendarDate(event.start);
  return start.getTime();
};

const getEventHours = (event) => {
  const start = parseCalendarDate(event.start);
  const end = parseCalendarDate(event.end);

  return {
    startHour: start.getHours() + start.getMinutes() / 60,
    endHour: end.getHours() + end.getMinutes() / 60,
  };
};

const getEventLayout = (event, index) => {
  const { startHour, endHour } = getEventHours(event);
  const duration = Math.max(0, endHour - startHour);
  const eventHeight = Math.max(MIN_EVENT_HEIGHT, duration * HOUR_HEIGHT);
  const isRightSide = index % 2 !== 0;

  return {
    top: `${startHour * HOUR_HEIGHT}px`,
    height: `${eventHeight}px`,
    left: isRightSide ? "39%" : "4%",
    width: isRightSide ? "55%" : "62%",
    backgroundColor: isRightSide ? "#FFEDBB" : "#FFF4B7",
  };
};

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

const dayDetailMotion = {
  hidden: {
    opacity: 0,
    x: -480,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  return isDesktop;
};

const DayDetail = forwardRef(function DayDetail({ date, tasks, height }, ref) {
  const timelineRef = useRef(null);
  const isDesktop = useIsDesktop();
  const selectedDate = getDateParts(date);
  const sortedTasks = useMemo(
    () => [...tasks].sort((a, b) => getEventStartTime(a) - getEventStartTime(b)),
    [tasks],
  );
  const hours = Array.from({ length: 24 }, (_, hour) =>
    new Date(2024, 0, 1, hour).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    }),
  );

  useLayoutEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const animationFrame = requestAnimationFrame(() => {
      if (sortedTasks.length === 0) {
        timeline.scrollTop = 8 * HOUR_HEIGHT;
        return;
      }

      const firstEventStartHour = getEventHours(sortedTasks[0]).startHour;

      timeline.scrollTop = Math.max(
        0,
        (firstEventStartHour - 1) * HOUR_HEIGHT,
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [date, sortedTasks, height]);

  useEffect(() => {
    if (!timelineRef.current || sortedTasks.length === 0) {
      return;
    }

    const firstEvent = timelineRef.current.querySelector("[data-first-event]");

    firstEvent?.focus({ preventScroll: true });
  }, [date, sortedTasks]);

  return (
    <motion.aside
      ref={ref}
      layout
      variants={dayDetailMotion}
      initial={isDesktop ? "hidden" : false}
      animate="visible"
      exit={isDesktop ? "hidden" : { opacity: 1, x: 0, transition: { duration: 0 } }}
      transition={{
        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.22, ease: "easeOut" },
        scale: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
        x: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
      }}
      className="w-full lg:w-[450px] shrink-0 border-8 border-[#FFDA15] rounded-[36px] px-5 sm:px-6 py-6 bg-white overflow-hidden flex flex-col"
      style={height ? { height: `${height}px` } : undefined}
    >
      <div className="flex items-center justify-between gap-4 border-b-4 border-[#E5E5E5] pb-5">
        <div className="rounded-3xl bg-[#E1E1E1] px-6 py-2 text-2xl sm:text-3xl uppercase">
          {selectedDate.toLocaleDateString("en-US", { weekday: "short" })}
        </div>
        <div className="text-3xl sm:text-4xl">
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div
        ref={timelineRef}
        className="relative mt-4 flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-hide"
      >
        <div
          className="relative"
          style={{ height: `${24 * HOUR_HEIGHT}px` }}
        >
          <div className="absolute left-[92px] top-0 bottom-0 w-1 bg-[#E5E5E5]" />
          <div className="absolute left-0 top-0 w-[88px] text-2xl text-[#8B8B8B]">
            {hours.map((hour) => (
              <div
                key={hour}
                className="leading-10"
                style={{ height: `${HOUR_HEIGHT}px` }}
              >
                {hour}
              </div>
            ))}
          </div>

          <div className="absolute left-[112px] right-0 top-0 bottom-0">
            {sortedTasks.length > 0 ? (
              sortedTasks.map((task, index) => (
                <div
                  key={task.id || `${task.title}-${index}`}
                  data-first-event={index === 0 ? true : undefined}
                  tabIndex={index === 0 ? -1 : undefined}
                  className="absolute rounded-xl bg-[#FFF4B7] px-4 py-3 overflow-hidden"
                  style={getEventLayout(task, index)}
                >
                  <div className="absolute left-2 top-3 bottom-3 w-1.5 rounded-full bg-[#FFDA15]" />
                  <p
                    className="pl-3 text-base sm:text-lg leading-tight truncate"
                    title={task.title}
                  >
                    {task.title}
                  </p>
                  <p className="pl-3 text-xs sm:text-sm text-[#777] leading-tight truncate">
                    {formatFullTimeRange(task.start, task.end)}
                  </p>
                </div>
              ))
            ) : (
              <div className="pt-4 text-xl text-[#8B8B8B]">No events</div>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
});

const Calender = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarGridHeight, setCalendarGridHeight] = useState(null);
  const calendarColumnRef = useRef(null);
  const isCalendarCompact = Boolean(selectedDate);

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
          `/api/calendar?timeMin=${timeMin}&timeMax=${timeMax}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events);
        setError(null);
      } catch (err) {
        console.error("Error fetching events:", err);
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

  const firstWeekdayOffset = useMemo(
    () =>
      getMondayBasedWeekdayOffset(
        new Date(currDate.getFullYear(), currDate.getMonth(), 1),
      ),
    [currDate],
  );
  const monthKey = `${currDate.getFullYear()}-${currDate.getMonth()}`;

  useEffect(() => {
    if (!selectedDate || !calendarColumnRef.current) {
      setCalendarGridHeight(null);
      return;
    }

    const calendarColumn = calendarColumnRef.current;
    const updateCalendarHeight = () => {
      setCalendarGridHeight(calendarColumn.offsetHeight);
    };

    updateCalendarHeight();

    const resizeObserver = new ResizeObserver(updateCalendarHeight);
    resizeObserver.observe(calendarColumn);

    return () => resizeObserver.disconnect();
  }, [selectedDate, currEvents]);

  const handleDayClick = (date) => {
    setSelectedDate((currentDate) => {
      return currentDate === date ? null : date;
    });
  };

  const CalenderNav = () => {
    return (
      <div className="flex items-center justify-end gap-3 py-4">
        <button
          onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setCurrDate(newDate);
            setSelectedDate(null);
          }}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &lt;
        </button>

        <div className="text-sm sm:text-base bg-[#F5F5F5] px-4 py-1 rounded-lg font-medium">
          {`${currDate.toLocaleString("en-US", { month: "long" })} ${currDate.getFullYear()}`}
        </div>

        <button
          onClick={() => {
            const newDate = new Date(currDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setCurrDate(newDate);
            setSelectedDate(null);
          }}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col px-4 sm:px-8 py-8">
        <div className="flex flex-row items-center justify-start gap-4">
          <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
            Calendar
          </h1>
          <Image
            src={"/images/CalendarRight.svg"}
            alt="hero right image"
            width={4000}
            height={4000}
            className="w-[10vw] h-auto mt-[0vw] unselectable"
          />
        </div>
        <CalenderNav />

        {loading && <div className="text-center py-4">Loading events...</div>}
        {error && (
          <div className="text-center py-4 text-red-500">Error: {error}</div>
        )}

        {!loading && !error && (
          <motion.div
            layout
            className="flex flex-col lg:flex-row gap-6 items-start"
            transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {selectedDate && (
                <DayDetail
                  key="calendar-day-detail"
                  date={selectedDate}
                  tasks={currEvents[selectedDate] || []}
                  height={calendarGridHeight}
                />
              )}
            </AnimatePresence>

            <motion.div
              layout
              ref={calendarColumnRef}
              className="w-full space-y-5"
              transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            >
              <WeekdayHeaders
                compact={isCalendarCompact}
                currentDate={currDate}
              />

              <div
                className={`grid w-full gap-3 ${
                  isCalendarCompact
                    ? "grid-cols-7 content-start overflow-y-auto pr-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7"
                }`}
              >
                {Array.from({ length: firstWeekdayOffset }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className={`aspect-square ${
                      isCalendarCompact ? "block" : "hidden lg:block"
                    }`}
                    aria-hidden="true"
                  />
                ))}

                {Object.entries(currEvents).map(([date, events]) => {
                  const dayNumber = parseInt(date.split("-")[2], 10);

                  return (
                    <Day
                      key={date}
                      day_number={dayNumber}
                      tasks={events}
                      date={date}
                      onClick={() => handleDayClick(date)}
                      isSelected={selectedDate === date}
                      compact={isCalendarCompact}
                    />
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Calender;

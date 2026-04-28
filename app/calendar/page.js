"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const toDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const parseEventDate = (value) => {
  if (!value) return null;
  if (!value.includes("T")) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date(value);
};

const formatTime = (value) => {
  const date = parseEventDate(value);
  if (!date || Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: date.getMinutes() ? "2-digit" : undefined,
    hour12: true,
  });
};

const formatRange = (event) => {
  const start = formatTime(event.start);
  const end = formatTime(event.end);
  if (!start && !end) return "All day";
  if (!end || start === end) return start;
  return `${start} - ${end}`;
};

const groupEventsByDate = (events) => {
  return events.reduce((acc, event) => {
    const key = event.date || event.start?.split("T")[0];
    if (!key) return acc;
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {});
};

const getCalendarCells = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;

  return [
    ...Array.from({ length: mondayOffset }, (_, index) => ({
      key: `empty-${index}`,
      empty: true,
    })),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const cellDate = new Date(year, month, day);
      return {
        key: toDateKey(cellDate),
        date: cellDate,
        day,
        dateKey: toDateKey(cellDate),
      };
    }),
  ];
};

const ChevronDownIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronLeftIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const MonthControls = ({ currDate, onMonthChange }) => (
  <div className="flex items-center gap-[clamp(1.1rem,2vw,2rem)] text-black">
    <div className="flex items-center gap-2 text-[clamp(1.9rem,3.4vw,2.9rem)] font-normal leading-none">
      <span>
        {currDate.toLocaleString("en-US", { month: "long" })}{" "}
        {currDate.getFullYear()}
      </span>
      <ChevronDownIcon className="mt-1 size-[0.64em] shrink-0" />
    </div>
    <div className="flex items-center gap-[clamp(0.85rem,1.6vw,1.6rem)]">
      <button
        type="button"
        aria-label="Previous month"
        onClick={() => onMonthChange(-1)}
        className="flex size-[clamp(2.2rem,3.2vw,3rem)] items-center justify-center rounded-full transition hover:bg-[#fff6bf] hover:text-[#7a6a00]"
      >
        <ChevronLeftIcon className="size-[62%]" />
      </button>
      <button
        type="button"
        aria-label="Next month"
        onClick={() => onMonthChange(1)}
        className="flex size-[clamp(2.2rem,3.2vw,3rem)] items-center justify-center rounded-full transition hover:bg-[#fff6bf] hover:text-[#7a6a00]"
      >
        <ChevronRightIcon className="size-[62%]" />
      </button>
    </div>
  </div>
);

const WeekdayTabs = ({ currentWeekday }) => (
  <div className="grid grid-cols-7 gap-[clamp(0.5rem,1vw,1.35rem)]">
    {DAYS.map((day, index) => {
      const active = index === currentWeekday;
      return (
        <div
          key={day}
          className={[
            "flex h-[clamp(56px,7vw,100px)] items-center justify-center rounded-[14px] text-[clamp(1rem,2vw,2rem)] font-medium text-[#777]",
            active
              ? "bg-[#ffd60a] shadow-[inset_-8px_-8px_18px_rgba(203,151,0,0.16),inset_8px_8px_18px_rgba(255,255,255,0.34)]"
              : "bg-[#f2f2f2] shadow-[inset_7px_7px_14px_rgba(0,0,0,0.08),inset_-7px_-7px_14px_rgba(255,255,255,0.75)]",
          ].join(" ")}
        >
          {day}
        </div>
      );
    })}
  </div>
);

const EventPreview = ({ event }) => (
  <div className="flex min-w-0 items-baseline gap-2 text-black">
    <span className="text-[#e0bd00]">•</span>
    <span className="shrink-0 text-[clamp(0.82rem,1.35vw,1rem)] font-bold leading-tight">
      {formatTime(event.start)}
    </span>
    <span className="truncate text-[clamp(0.72rem,1.05vw,0.86rem)] font-medium leading-tight">
      {event.title}
    </span>
  </div>
);

const MonthCell = ({
  cell,
  events,
  isToday,
  isSelected,
  onSelect,
  isAnySelected,
}) => {
  if (cell.empty) return <div className="aspect-square w-full" />;

  const compact = isSelected && !isToday;
  return (
    <motion.button
      layout
      initial={false}
      animate={{
        scale: isSelected ? 1.08 : isAnySelected ? 0.92 : 1,
        opacity: isSelected ? 1 : isAnySelected ? 0.7 : 1,
        borderRadius: compact ? "50%" : "20px",
      }}
      whileHover={{ scale: isSelected ? 1.12 : 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      type="button"
      onClick={() => onSelect(cell.date)}
      style={{ zIndex: isSelected ? 10 : 1 }}
      className={[
        "relative flex aspect-square w-full cursor-pointer flex-col overflow-hidden border-[clamp(3px,0.45vw,5px)] text-left transition ",
        isToday
          ? "border-[#ffd60a] bg-[#ffd60a]"
          : isSelected
            ? "border-[#ffd60a] bg-[radial-gradient(circle_at_50%_45%,#fff7cf_0%,#fff0a4_48%,#ffd60a_100%)]"
            : "border-[#f4cd00] bg-white hover:bg-[#fffdf2]",
      ].join(" ")}
    >
      <div className="space-y-[clamp(0.2rem,0.55vw,0.45rem)] px-[clamp(0.55rem,1vw,1rem)] pt-[clamp(0.5rem,0.9vw,1rem)]">
        {events.slice(0, 2).map((event) => (
          <EventPreview
            key={event.id || `${event.title}-${event.start}`}
            event={event}
          />
        ))}
      </div>
      <span
        className={[
          "absolute bottom-[clamp(0.65rem,1.4vw,1.45rem)] left-1/2 -translate-x-1/2 text-[clamp(1.8rem,3.6vw,3.45rem)] font-medium leading-none",
          isToday ? "text-[#5f5f5f]" : "text-[#747474]",
        ].join(" ")}
      >
        {cell.day}
      </span>
    </motion.button>
  );
};

const SchedulePanel = ({ selectedDate, events }) => {
  if (!selectedDate) return null;

  const monthDay = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const weekday = selectedDate
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const hours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
  ];
  const sortedEvents = [...events].sort((a, b) => {
    const aDate = parseEventDate(a.start);
    const bDate = parseEventDate(b.start);
    return (aDate?.getTime() || 0) - (bDate?.getTime() || 0);
  });

  return (
    <motion.aside
      layout
      initial={{ x: -32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -32, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="rounded-[22px] border-[6px] border-[#ffd60a] bg-white p-[clamp(1rem,2vw,1.55rem)]"
    >
      <div className="mb-8 flex items-center gap-7 border-b-2 border-[#e4e4e4] pb-7">
        <span className="rounded-[15px] bg-[#e8e8e8] px-7 py-3 text-[clamp(1rem,1.8vw,1.6rem)] font-medium leading-none">
          {weekday}
        </span>
        <span className="border-b-[5px] border-[#1594ff] text-[clamp(1.65rem,2.5vw,2.2rem)] leading-none">
          {monthDay}
        </span>
      </div>

      <div className="grid grid-cols-[64px_1fr] gap-4">
        <div className="space-y-[18px] text-[clamp(0.9rem,1.45vw,1.25rem)] text-[#8a8a8a]">
          {hours.map((hour) => (
            <div key={hour} className="h-[30px] leading-[30px]">
              {hour}
            </div>
          ))}
        </div>
        <div className="relative min-h-[420px] border-l-2 border-[#e0e0e0]">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event, index) => (
              <div
                key={event.id || `${event.title}-${event.start}`}
                className="absolute left-4 w-[min(74%,260px)] rounded-[8px] bg-[#fff0ad] p-3 shadow-sm"
                style={{
                  top: `${Math.min(index * 122 + 18, 292)}px`,
                  height: index === 0 ? "190px" : "118px",
                }}
              >
                <div className="border-l-[5px] border-[#ffd60a] pl-3">
                  <div className="text-[clamp(1rem,1.7vw,1.35rem)] font-medium leading-tight">
                    {event.title}
                  </div>
                  <div className="text-[clamp(0.75rem,1vw,0.95rem)] text-[#777]">
                    {formatRange(event)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="ml-5 mt-4 rounded-[8px] bg-[#fff4c7] p-4 text-[#777]">
              No events scheduled.
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

const Calendar = () => {
  const today = useMemo(() => new Date(), []);
  const [currDate, setCurrDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        setEvents(data.events || []);
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

  const eventsByDate = useMemo(() => groupEventsByDate(events), [events]);
  const cells = useMemo(() => getCalendarCells(currDate), [currDate]);
  const todayKey = toDateKey(today);
  const selectedKey = selectedDate ? toDateKey(selectedDate) : null;
  const selectedEvents = selectedKey ? eventsByDate[selectedKey] || [] : [];
  const currentWeekday = (today.getDay() + 6) % 7;

  const handleMonthChange = (amount) => {
    setCurrDate(
      (date) => new Date(date.getFullYear(), date.getMonth() + amount, 1),
    );
    setSelectedDate(null);
  };

  const handleDateSelect = (date) => {
    setSelectedDate((current) => {
      if (current && toDateKey(current) === toDateKey(date)) return null;
      return date;
    });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="mx-auto max-w-[1720px] px-[clamp(0.9rem,3vw,4.5rem)] pb-16 pt-[clamp(5.75rem,8vw,7.2rem)]">
        <div className="mb-[clamp(1.6rem,3.2vw,3.2rem)] flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-[clamp(1.2rem,2.6vw,2.8rem)]">
            <h1 className="dk-prince-frog text-[clamp(5rem,11.6vw,12rem)] font-black leading-[0.72] tracking-normal">
              Calendar
            </h1>
            <Image
              // TODO: replace it with the actual image
              src="/funky_svgs/hero_left.svg"
              alt=""
              width={139}
              height={269}
              priority
              className="mt-[-0.35vw] hidden h-auto w-[clamp(5.8rem,11vw,10.5rem)] shrink-0 rotate-180 md:block"
            />
          </div>
          <div className="mt-[clamp(2rem,10vw,10rem)] flex justify-start lg:justify-end">
            <MonthControls
              currDate={currDate}
              onMonthChange={handleMonthChange}
            />
          </div>
        </div>

        {loading && (
          <div className="mb-6 text-center text-[#777]">Loading events...</div>
        )}
        {error && (
          <div className="mb-6 text-center text-red-500">Error: {error}</div>
        )}

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
          className={
            selectedDate
              ? "grid gap-6 xl:grid-cols-[minmax(360px,520px)_1fr]"
              : ""
          }
        >
          <AnimatePresence initial={false}>
            {selectedDate && (
              <SchedulePanel
                key="schedule-panel"
                selectedDate={selectedDate}
                events={selectedEvents}
              />
            )}
          </AnimatePresence>

          <motion.div
            layout
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
            className="min-w-0"
          >
            <WeekdayTabs currentWeekday={currentWeekday} />
            <div
              className={[
                "relative grid h-[clamp(430px,48vw,720px)] w-full grid-cols-7 content-between",
                selectedDate
                  ? "mt-[clamp(0.65rem,1.2vw,1.15rem)] gap-x-[clamp(0.35rem,0.7vw,0.85rem)]"
                  : "mt-[clamp(1rem,1.8vw,1.6rem)] gap-x-[clamp(0.45rem,0.9vw,1.1rem)]",
              ].join(" ")}
            >
              {cells.map((cell) => (
                <MonthCell
                  key={cell.key}
                  cell={cell}
                  events={cell.dateKey ? eventsByDate[cell.dateKey] || [] : []}
                  isToday={cell.dateKey === todayKey}
                  isSelected={cell.dateKey === selectedKey}
                  onSelect={handleDateSelect}
                  isAnySelected={!!selectedDate}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Calendar;

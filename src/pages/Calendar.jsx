import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { useState } from "react";
import React from "react";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "Subscription Renewal",
      start: new Date(2025, 11, 28, 10, 0),
      end: new Date(2025, 11, 28, 11, 0),
      allDay: false,
    },
    {
      id: 1,
      title: "Payment Due",
      start: new Date(2025, 11, 30, 9, 0),
      end: new Date(2025, 11, 30, 10, 0),
      allDay: false,
    },
  ]);

  return (
    <div style={{ height: "80vh", padding: "1rem", background: "#fff", borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["month", "week", "day"]}
        style={{ height: "100%" }}
        popup
        onNavigate={(date, view) => console.log("Navigated to:", date, view)}
        showMultiDayTimes
        tooltipAccessor={null}
      />
    </div>
  );
};

export default Calendar;

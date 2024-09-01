import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CustomCalendar = ({ theme }) => {
  const [events, setEvents] = useState([
    {
      title: "JAVA: Bitwise Operator",
      start: new Date(2024, 4, 15, 7, 30),
      end: new Date(2024, 4, 15, 9, 0),
    },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 15));

  const onEventDrop = ({ event, start, end }) => {
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.title === event.title
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

  const onNavigate = (date) => {
    setCurrentDate(date);
  };

  return (
    <div
      className={`text-black mt-20 ml-10 rounded-3xl overflow-x-hidden ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-gradient-to-r from-[#FA5D2C] via-[#f0663d] to-[#e87657]"
      }`}
    >
      <DndProvider backend={HTML5Backend}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="day"
          views={["day"]}
          step={60}
          timeslots={1}
          min={new Date(2024, 4, 15, 7, 0)}
          max={new Date(2024, 4, 15, 23, 59)}
          style={{ height: "40vh", width: "45vw" }}
          onEventDrop={onEventDrop}
          draggableAccessor={() => true}
          defaultDate={new Date(2024, 4, 15)}
          onNavigate={onNavigate}
          components={{
            toolbar: (props) => (
              <CustomToolbar {...props} currentDate={currentDate} />
            ),
          }}
          eventPropGetter={() => ({
            className: "dark:bg-[#FA5D2C] rounded-2xl bg-[#ac3713]",
          })}
        />
      </DndProvider>
    </div>
  );
};

const CustomToolbar = ({ onNavigate, label, currentDate }) => {
  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const goToCurrent = () => {
    onNavigate("TODAY");
  };

  return (
    <div className="rbc-toolbar bg-[#FDE4DD] rounded-t-lg p-2 overflow-hidden">
      <span className="rbc-btn-group ml-5 mt-2">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={goToBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={goToCurrent}
        >
          Today
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={goToNext}
        >
          Next
        </button>
      </span>
      <span className="rbc-toolbar-label text-black">
        {moment(currentDate).format("MMMM Do YYYY")}
      </span>
    </div>
  );
};

export default CustomCalendar;

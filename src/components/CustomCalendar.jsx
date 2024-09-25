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
      className={`text-black lg:w-[26rem] md:w-[20rem] sm:w-0 w-0 mt-20  overflow-x-hidden rounded-md`}
    >
      <style>
        {`
          .rbc-time-view,
          .rbc-time-header,
          .rbc-time-content,
          .rbc-event,
          .rbc-month-view,
          .rbc-header,
          .rbc-allday-cell,
          .rbc-time-gutter-header,
          .rbc-time-slot,
          .rbc-timeslot-group {
            border: none;
          }

          .rbc-event {
            height: 44% !important;
          }
        `}
      </style>
      <div
        className={`${
          theme === "dark"
            ? "bg-black"
            : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
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
            step={550}
            timeslots={1}
            min={new Date(2024, 4, 15, 7, 0)}
            max={new Date(2024, 4, 15, 23, 59)}
            style={{
              height: "40vh",
              width: "45vw",
              color: "white",
            }}
            onEventDrop={onEventDrop}
            draggableAccessor={() => true}
            defaultDate={new Date(2024, 4, 15)}
            onNavigate={onNavigate}
            components={{
              toolbar: (props) => (
                <CustomToolbar {...props} currentDate={currentDate} />
              ),
            }}
            eventPropGetter={(event) => ({
              className:
                event.title === "JAVA: Bitwise Operator"
                  ? "bg-[#FA5D2C] text-white rounded-md"
                  : "bg-[#ac3713] rounded-md",
            })}
          />
        </DndProvider>
      </div>
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
    <>
      <div className=" rounded-t-lg p-2 overflow-hidden flex justify-items-start items-center">
        <div className=" flex gap-2">
          <div className="w-fit">
            <button
              className="mx-2 dark:text-orange-400 text-white py-1 rounded"
              onClick={goToBack}
            >
              Back
            </button>
          </div>
          <div className="w-fit">
            <button
              className="mx-2 dark:text-orange-400 text-white py-1 rounded"
              onClick={goToCurrent}
            >
              Today
            </button>
          </div>
          <div className="w-fit">
            <button
              className="mx-2 dark:text-orange-400 text-white py-1 rounded"
              onClick={goToNext}
            >
              Next
            </button>
          </div>
        </div>
        <span className="rbc-toolbar-label dark:text-orange-400 text-white mt-2 ml-10">
          {moment(currentDate).format("MMMM Do YYYY")}
        </span>
      </div>
    </>
  );
};

export default CustomCalendar;

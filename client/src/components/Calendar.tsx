import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useUser } from "@clerk/clerk-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d6e9ff;
  padding: 20px;
  border-radius: 10px;
`;

const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__tile--now {
    background: #1f3b72;
    color: white;
  }

  .react-calendar__tile--active {
    background: #1f3b72;
    color: white;
  }
`;

const EventsList = styled.div`
  margin-top: 20px;
  background-color: #1f3b72;
  color: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
`;

const EventItem = styled.div`
  margin-bottom: 10px;
`;

const AddEventButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

interface Meeting {
  employeeID: string;
  date: Date;
  time: string;
  eventName: string;
}

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Meeting[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchEvents = async () => {
      if (user && user.id) {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        try {
          const response = await fetch(
            `http://localhost:3000/meetings/${user.id}/${formattedDate}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch events");
          }
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }
    };

    fetchEvents();
  }, [selectedDate, user]);

  const handleDateChange = async (date: any) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <CalendarContainer>
      <StyledCalendar value={selectedDate} onChange={handleDateChange} />
      <EventsList>
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventItem key={index}>
              {event.time && typeof event.time === "string" && (
                <>
                  {isValidTimeFormat(event.time) ? (
                    `${formatTime(event.time)}`
                  ) : (
                    `Invalid time format - ${event.eventName}`
                  )}
                  {" - "}
                </>
              )}
              {event.eventName}
            </EventItem>
          ))
        ) : (
          <div>No events for this day</div>
        )}
      </EventsList>
      <Link to="/calendar/addEvents">
        <AddEventButton>Add Event</AddEventButton>
      </Link>
    </CalendarContainer>
  );
};
const isValidTimeFormat = (time: string): boolean => {
  return /^[0-2][0-9]:[0-5][0-9]$/.test(time);
};
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(":");
  const formattedTime = `${parseInt(hours, 10) % 12 || 12}:${minutes} ${
    parseInt(hours, 10) >= 12 ? "PM" : "AM"
  }`;
  return formattedTime;
};

export default CalendarComponent;

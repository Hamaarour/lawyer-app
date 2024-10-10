import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, X } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = Array.from({ length: 9 }, (_, i) => `${i + 9}:00`); // 9 AM to 5 PM

// Sample appointments data
const initialAppointments = [
  {
    id: 1,
    clientName: "John Doe",
    date: "2024-10-15",
    time: "10:00",
    type: "Consultation",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    date: "2024-10-15",
    time: "14:00",
    type: "Follow-up",
  },
];

const Calender = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [blockedSlots, setBlockedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + increment);
    setSelectedDate(newDate);
  };

  const toggleBlockedSlot = (time) => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    const slotKey = `${dateStr}-${time}`;

    if (blockedSlots.includes(slotKey)) {
      setBlockedSlots(blockedSlots.filter((slot) => slot !== slotKey));
    } else {
      setBlockedSlots([...blockedSlots, slotKey]);
    }
  };

  const isSlotBlocked = (time) => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    return blockedSlots.includes(`${dateStr}-${time}`);
  };

  const getAppointmentsForTimeSlot = (time) => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    return appointments.filter(
      (app) => app.date === dateStr && app.time === time
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Calendar</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleDateChange(-1)}
            className="px-3 py-1 border rounded"
          >
            Previous
          </button>
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <span>{selectedDate.toDateString()}</span>
          </div>
          <button
            onClick={() => handleDateChange(1)}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {timeSlots.map((time) => (
          <div key={time} className="flex items-center border-b py-2">
            <div className="w-20 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {time}
            </div>
            <div className="flex-grow flex items-center">
              {getAppointmentsForTimeSlot(time).map((app) => (
                <div
                  key={app.id}
                  className="bg-blue-100 rounded px-3 py-1 mr-2 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  {app.clientName} - {app.type}
                </div>
              ))}
            </div>
            <button
              onClick={() => toggleBlockedSlot(time)}
              className={`px-3 py-1 rounded ${
                isSlotBlocked(time) ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
            >
              {isSlotBlocked(time) ? "Unblock" : "Block"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calender;

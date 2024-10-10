import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, ChevronRight, X } from "lucide-react";

const timeSlots = Array.from({ length: 9 }, (_, i) => `${i + 9}:00`);

// Sample appointments data
const initialAppointments = [
  {
    id: 1,
    date: "2024-10-15",
    time: "10:00",
    type: "Consultation",
    status: "confirmed",
  },
  {
    id: 2,
    date: "2024-10-20",
    time: "14:00",
    type: "Follow-up",
    status: "pending",
  },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    type: "",
    time: "",
  });

  const handleDateChange = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + increment);
    setSelectedDate(newDate);
  };

  const handleBookAppointment = () => {
    if (newAppointment.type && newAppointment.time) {
      const dateStr = selectedDate.toISOString().split("T")[0];
      const appointment = {
        id: appointments.length + 1,
        date: dateStr,
        time: newAppointment.time,
        type: newAppointment.type,
        status: "pending",
      };
      setAppointments([...appointments, appointment]);
      setShowBookingForm(false);
      setNewAppointment({ type: "", time: "" });
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Appointments</h1>
        <button
          onClick={() => setShowBookingForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Book New Appointment
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((app) => (
              <div
                key={app.id}
                className="border rounded p-4 flex justify-between items-center"
              >
                <div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {app.date} at {app.time}
                  </div>
                  <div className="mt-1">{app.type}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      app.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {app.status}
                  </span>
                  <button className="text-blue-500">Reschedule</button>
                  <button className="text-red-500">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Book Appointment</h2>
              <button onClick={() => setShowBookingForm(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1">Appointment Type</label>
                <select
                  className="w-full p-2 border rounded"
                  value={newAppointment.type}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="">Select type</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Follow-up">Follow-up</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Date</label>
                <div className="flex items-center justify-between border rounded p-2">
                  <button onClick={() => handleDateChange(-1)}>&lt;</button>
                  <span>{selectedDate.toDateString()}</span>
                  <button onClick={() => handleDateChange(1)}>&gt;</button>
                </div>
              </div>

              <div>
                <label className="block mb-1">Time</label>
                <select
                  className="w-full p-2 border rounded"
                  value={newAppointment.time}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      time: e.target.value,
                    })
                  }
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBookAppointment}
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;

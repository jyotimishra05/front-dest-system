import React, { useState } from "react";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({
    doctor: "",
    patient: "",
    time: "",
  });

  const bookAppointment = () => {
    setAppointments([...appointments, { ...appointment, id: Date.now() }]);
    setAppointment({ doctor: "", patient: "", time: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Doctor"
          value={appointment.doctor}
          onChange={(e) =>
            setAppointment({ ...appointment, doctor: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Patient"
          value={appointment.patient}
          onChange={(e) =>
            setAppointment({ ...appointment, patient: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Time"
          value={appointment.time}
          onChange={(e) =>
            setAppointment({ ...appointment, time: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={bookAppointment}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Book Appointment
        </button>
      </div>
      <ul>
        {appointments.map((a) => (
          <li key={a.id} className="border p-2 mb-2">
            {a.doctor} - {a.patient} - {a.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentManagement;

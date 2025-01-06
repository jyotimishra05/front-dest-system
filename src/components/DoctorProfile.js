import React, { useState } from "react";

const DoctorProfile = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    location: "",
    availability: "",
  });

  const handleAddDoctor = () => {
    setDoctors([...doctors, { ...doctor, id: Date.now() }]);
    setDoctor({ name: "", specialization: "", location: "", availability: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Doctor Profile Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={doctor.name}
          onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={(e) =>
            setDoctor({ ...doctor, specialization: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={doctor.location}
          onChange={(e) => setDoctor({ ...doctor, location: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Availability"
          value={doctor.availability}
          onChange={(e) =>
            setDoctor({ ...doctor, availability: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddDoctor}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Doctor
        </button>
      </div>
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id} className="border p-2 mb-2">
            {doc.name} - {doc.specialization} - {doc.location} -{" "}
            {doc.availability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorProfile;

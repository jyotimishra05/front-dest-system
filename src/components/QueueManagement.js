import React, { useState } from "react";

const QueueManagement = () => {
  const [queue, setQueue] = useState([]);
  const [patient, setPatient] = useState("");

  const addToQueue = () => {
    setQueue([...queue, { name: patient, status: "Waiting", id: Date.now() }]);
    setPatient("");
  };

  const updateStatus = (id, status) => {
    setQueue(queue.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Queue Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addToQueue}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add to Queue
        </button>
      </div>
      <ul>
        {queue.map((p) => (
          <li key={p.id} className="border p-2 mb-2">
            {p.name} - {p.status}
            <button
              onClick={() => updateStatus(p.id, "With Doctor")}
              className="ml-2 bg-green-500 text-white px-2"
            >
              With Doctor
            </button>
            <button
              onClick={() => updateStatus(p.id, "Completed")}
              className="ml-2 bg-gray-500 text-white px-2"
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueManagement;

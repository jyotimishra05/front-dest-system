import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Clinic Front Desk System
      </h1>
      <p className="text-lg text-gray-600">
        Manage patient queues, doctor profiles, and appointments with ease.
      </p>
      <div className="mt-8">
        <img
          src="https://img.freepik.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg"
          alt="Clinic Illustration"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;

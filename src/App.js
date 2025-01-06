import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QueueManagement from "./components/QueueManagement";
import AppointmentManagement from "./components/AppointmentManagement";
import DoctorProfile from "./components/DoctorProfile";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/queue" element={<QueueManagement />} />
        <Route path="/appointments" element={<AppointmentManagement />} />
        <Route path="/doctors" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

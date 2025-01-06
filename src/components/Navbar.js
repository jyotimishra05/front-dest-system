import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Clinic Front Desk</h1>
        <div>
          <Link to="/" className="text-white mx-2">
            Home
          </Link>
          <Link to="/queue" className="text-white mx-2">
            Queue Management
          </Link>
          <Link to="/appointments" className="text-white mx-2">
            Appointments
          </Link>
          <Link to="/login" className="text-white mx-2">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

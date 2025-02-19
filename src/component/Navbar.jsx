import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

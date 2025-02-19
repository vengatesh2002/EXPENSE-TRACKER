import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h2>Welcome, {user ? user.email : "Guest"}!</h2>
      <p>This is your Expense Tracker Dashboard</p>
    </div>
  );
};

export default Dashboard;

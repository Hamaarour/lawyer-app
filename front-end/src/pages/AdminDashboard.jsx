import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardHome from "../components/dashboard/DashboardHome";
import Calendar from "../components/dashboard/Calender";
import LawyerChart from "../components/dashboard/LawyerCharts";
import ClientList from "../components/dashboard/ClientList";
import Cases from "../components/dashboard/Cases";
import Appointments from "../components/dashboard/Appointments";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex h-screen ">
      <DashboardSideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/home" />} />
            <Route path="/home" element={<DashboardHome />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/statistics" element={<LawyerChart />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

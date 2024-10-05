import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardHome from "../components/dashboard/DashboardHome";
import Calender from "../components/dashboard/Calender";
import LawyerChart from "../components/dashboard/LawyerChart";
import ClientList from "../components/dashboard/ClientList";
import CaseList from "../components/dashboard/CaseList";
import Appointments from "../components/dashboard/Appointments";
import Tasks from "../components/dashboard/Tasks";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <DashboardSideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/home" element={<DashboardHome />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calender />} />
            <Route path="/cases" element={<CaseList />} />
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

import React from "react";
import { Search, Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 ">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="flex items-center space-x-2">
          <img
            src="/images/Legal-consultation.jpg"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;

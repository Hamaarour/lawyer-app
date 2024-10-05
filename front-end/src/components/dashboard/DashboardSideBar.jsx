import { Link } from "react-router-dom";
import { ChartPie } from "lucide-react";
import {
  House,
  CalendarDays,
  BriefcaseBusiness,
  SquareCheckBig,
  LogOut,
  Users,
  CalendarCheck,
} from "lucide-react";

const DashboardSideBar = () => (
  <div className="w-64 bg-white p-4 border-r h-screen flex flex-col">
    <div className="mb-8 flex-1">
      <img
        src="../../../src/assets/images/logo.png"
        alt="logo"
        className="mb-12"
      />
      <h2 className="text-sm font-semibold text-gray-500">ACCOUNT</h2>
      <nav className="flex flex-col my-5">
        {[
          { icon: <House />, label: "Home", route: "/dashboard/home" },
          {
            icon: <CalendarDays />,
            label: "Calendar",
            route: "/dashboard/calendar",
          },
          {
            icon: <SquareCheckBig />,
            label: "Task",
            route: "/dashboard/tasks",
          },
          {
            icon: <BriefcaseBusiness />,
            label: "Cases",
            route: "/dashboard/cases",
            active: true,
          },
          { icon: <Users />, label: "Clients", route: "/dashboard/clients" },
          {
            icon: <CalendarCheck />,
            label: "Appointment",
            route: "/dashboard/appointment",
          },
          {
            icon: <ChartPie />,
            label: "Statistics",
            route: "/dashboard/statistics",
          },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.route} // Correct routes here
            className={`flex items-center gap-3 p-2 h-full w-full rounded mb-1 ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>

    <div>
      <nav className="">
        {[{ icon: <LogOut />, label: "Log out", route: "/logout" }].map(
          (item, index) => (
            <Link
              key={index}
              to={item.route}
              className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded mb-1"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </nav>
    </div>
  </div>
);

export default DashboardSideBar;

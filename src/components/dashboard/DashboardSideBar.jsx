import { NavLink, useNavigate } from "react-router-dom";
import {
  ChartPie,
  House,
  CalendarDays,
  BriefcaseBusiness,
  SquareCheckBig,
  LogOut,
  Users,
  CalendarCheck,
} from "lucide-react";

const DashboardSideBar = () => {
  const navItems = [
    { icon: <House />, label: "Home", route: "/dashboard/home" },
    { icon: <CalendarDays />, label: "Calendar", route: "/dashboard/calendar" },
    { icon: <BriefcaseBusiness />, label: "Cases", route: "/dashboard/cases" },
    { icon: <Users />, label: "Clients", route: "/dashboard/clients" },
    {
      icon: <CalendarCheck />,
      label: "Appointment",
      route: "/dashboard/appointment",
    },
    { icon: <ChartPie />, label: "Statistics", route: "/dashboard/statistics" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-cream p-4 border-r h-screen flex flex-col">
      <div className="mb-8 flex-1">
        <img src="/public/images/logo.png" alt="logo" className="mb-12" />
        <h2 className="text-sm font-semibold text-gray-500">ACCOUNT</h2>
        <nav className="flex flex-col my-5">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 w-full rounded mb-1 transition-all duration-300 ease-in-out transform ${
                  isActive
                    ? " bg-gold text-white font-bold rounded-3xl px-10"
                    : "text-gray-700 hover:bg-gray-50 hover:rounded-3xl"
                }`
              }
              end
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded mb-1"
        >
          <span>
            <LogOut />
          </span>
          <span>Log out</span>
        </button>
      </>
    </div>
  );
};

export default DashboardSideBar;

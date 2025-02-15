// components/dashboard/DashboardSidebar.jsx
import React from "react";
import { Users, UserCircle, Shield, PieChart } from "lucide-react";

const DashboardSidebar = ({ currentView, onViewChange }) => {
  const menuItems = [
    { icon: Users, label: "Vue Globale", id: "overview" },
    { icon: UserCircle, label: "Réconciliation", id: "users" },
    { icon: Shield, label: "Groupes", id: "groups" },
    { icon: PieChart, label: "Role Mining", id: "rolemining" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">AD Dashboard</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer ${
              currentView === item.id ? "bg-gray-100" : ""
            }`}
            onClick={() => onViewChange(item.id)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;

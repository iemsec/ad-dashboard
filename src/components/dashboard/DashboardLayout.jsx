// components/dashboard/DashboardLayout.jsx
import React, { useState } from "react";
import { UserDataProvider } from "../../hooks/useUserData";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const DashboardLayout = () => {
  const [currentView, setCurrentView] = useState("overview");

  return (
    <UserDataProvider>
      <div className="flex h-screen bg-gray-100">
        <DashboardSidebar 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />
        <DashboardContent currentView={currentView} />
      </div>
    </UserDataProvider>
  );
};

export default DashboardLayout;

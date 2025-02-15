import React from "react";
import { useUserData } from "../../hooks/useUserData";
import Overview from "./Overview";
import OrphanAccountsView from "../orphanAccounts/OrphanAccountsView";

const DashboardContent = ({ currentView }) => {
  const { loading, error } = useUserData();

  if (loading) {
    return (
      <div className="flex-1 p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Une erreur est survenue lors du chargement des données: {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case "overview":
        return <Overview />;
      case "users":
        return <OrphanAccountsView />;
      case "groups":
        return <div>Vue des groupes (à implémenter)</div>;
      case "rolemining":
        return <div>Vue du role mining (à implémenter)</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;

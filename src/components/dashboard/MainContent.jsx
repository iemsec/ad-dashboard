// src/components/dashboard/MainContent.jsx
import React from "react";
import Overview from "./Overview";
import { useUserData } from "../../hooks/useUserData";

const MainContent = () => {
  const { loading, error } = useUserData();

  if (loading) return <div className="p-8">Chargement...</div>;
  if (error) return <div className="p-8 text-red-600">Erreur: {error}</div>;

  return (
    <div className="flex-1 overflow-auto p-8">
      <Overview />
    </div>
  );
};

export default MainContent;


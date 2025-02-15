import React from "react";
import { Users, Shield, AlertCircle, UserCheck } from "lucide-react";
import StatsCard from "../ui/StatsCard";
import UserDistributionChart from "../ui/UserDistributionChart";
import { useUserData } from "../../hooks/useUserData";

const Overview = () => {
  const { userStats, groupStats } = useUserData();

  const stats = [
    {
      title: "Utilisateurs Totaux",
      value: userStats.total,
      icon: Users,
      color: "blue",
    },
    {
      title: "Utilisateurs Actifs",
      value: userStats.actifs,
      icon: UserCheck,
      color: "green",
    },
    {
      title: "Comptes Orphelins",
      value: userStats.orphelins,
      icon: AlertCircle,
      color: "red",
    },
    {
      title: "Groupes",
      value: groupStats.total,
      icon: Shield,
      color: "purple",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Vue d'ensemble</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <UserDistributionChart />
    </div>
  );
};

export default Overview;

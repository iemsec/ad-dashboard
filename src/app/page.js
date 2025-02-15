// src/app/page.js
"use client";
import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardLayout />
    </div>
  );
}
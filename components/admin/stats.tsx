"use client";

// import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // For Chart.js

ChartJS.register(ArcElement, Tooltip, Legend); // Register chart components

interface StatsProps {
  stats: any; // Stats data passed as props
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div>
      <h2 className="text-3xl mb-6">Dashboard Stats</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Total Contacts */}
        <div className="bg-cyan-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Total Contacts</h3>
          <div className="flex justify-center items-center h-full ">
          <p className="text-9xl">{stats ? stats.totalContacts : 0}</p>
          </div>
        </div>

        {/* Country Stats Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Contacts by Country</h3>
          {stats?.countryStats ? (
            <Pie data={stats.countryStats} />
          ) : (
            <p className="text-center mt-4">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;

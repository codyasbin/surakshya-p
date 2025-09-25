"use client";

import { useState, useEffect } from "react";
import { useAuth, RedirectToSignIn, SignOutButton } from "@clerk/nextjs"; // Clerk hooks
import { motion } from "framer-motion"; // For animations
import ContactInfo from "@/components/admin/contacts"; // Contact Info component
import Stats from "@/components/admin/stats";
import FeedbackSection from "@/components/admin/feedback";

const AdminDashboard = () => {
  const { isSignedIn, isLoaded } = useAuth(); // Use Clerk's useAuth hook
  const [activeTab, setActiveTab] = useState("contacts"); // Manage active tab
  const [contacts, setContacts] = useState<any[]>([]); // Contacts data
  const [stats, setStats] = useState<any | null>(null); // Stats state for the pie chart

  // Function to change active tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to fetch contacts and calculate stats
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts"); // Fetch contacts
      const data = await response.json();
      if (response.ok) {
        setContacts(data); // Set the contacts data
        calculateStats(data); // Calculate the stats after fetching data
      } else {
        console.error("Failed to fetch contacts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Function to calculate stats from the contacts data
  const calculateStats = (data: any[]) => {
    const countryStats: Record<string, number> = {};
    const jobTitleStats: Record<string, number> = {};

    data.forEach((contact) => {
      countryStats[contact.country] = (countryStats[contact.country] || 0) + 1;
      jobTitleStats[contact.jobTitle] =
        (jobTitleStats[contact.jobTitle] || 0) + 1;
    });

    const countryData = {
      labels: Object.keys(countryStats),
      datasets: [
        {
          data: Object.values(countryStats),
          backgroundColor: ["#A3A9FC", "#88D0F7", "#F4A261", "#2EC4B6"],
        },
      ],
    };

    setStats({
      totalContacts: data.length,
      countryStats: countryData,
      jobTitleStats: jobTitleStats,
    });
  };

  // Fetch contacts when the component loads or when activeTab is changed to "stats"
  useEffect(() => {
    if (isSignedIn && activeTab === "stats") {
      fetchContacts(); // Fetch contacts only when the "Stats" tab is active
    }
  }, [isSignedIn, activeTab]);

  if (!isLoaded) return <div>Loading...</div>;

  // Redirect to sign-in if the user is not signed in
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sidebar */}
      <div className="w-64 bg-cyan-900 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <div>
          <ul className="space-y-4">
            <li
              onClick={() => handleTabChange("contacts")}
              className="cursor-pointer hover:bg-cyan-700 p-2 rounded-md"
            >
              Contact Information
            </li>
            <li
              onClick={() => handleTabChange("stats")}
              className="cursor-pointer hover:bg-cyan-700 p-2 rounded-md"
            >
              Statistics
            </li>
            <li
              onClick={() => handleTabChange("feedback")}
              className="cursor-pointer hover:bg-cyan-700 p-2 rounded-md"
            >
              Feedback Information
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4">Welcome Surakshya Paudel</h1>

          {/* Sign-out Button */}
          <div className="mb-4 flex justify-center">
            <div className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
              <SignOutButton>Sign Out</SignOutButton>
            </div>
          </div>
        </div>

        {activeTab === "contacts" && <ContactInfo />} {/* Show Contact Info tab content */}
        
        {activeTab === "stats" && stats && <Stats stats={stats} />} {/* Show Stats component */}

        {activeTab === "feedback" &&  (
          <div>
            <h2 className="text-3xl mb-6">Feedback Section</h2>
            <FeedbackSection/>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;

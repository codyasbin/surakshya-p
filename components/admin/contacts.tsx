"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

// Type definition for the Contact data
interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
}

const ContactInfo = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // State to store contact data
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  // Function to fetch contacts from the API
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts");
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
      } else {
        console.error("Failed to fetch contacts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a contact
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/admin/delete?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok) {
        alert("Contact deleted successfully");
        fetchContacts(); // Reload contacts after deletion
      } else {
        alert(result.error || "Error deleting contact");
      }
    } catch (error) {
      alert("An error occurred while deleting the contact.");
    }
  };

  // Fetch contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <motion.div
      className="overflow-x-auto shadow-lg rounded-lg bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Company
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Job Details
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <motion.tr
              key={contact._id}
              className="border-b bg-white hover:bg-gray-50 transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <td className="px-6 py-4">{contact.name}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">{contact.phone}</td>
              <td className="px-6 py-4">{contact.company}</td>
              <td className="px-6 py-4">{contact.country}</td>
              <td className="px-6 py-4">{contact.jobTitle}</td>
              <td className="px-6 py-4">{contact.jobDetails}</td>
              <td className="px-6 py-4">
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(contact._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {loading && <div className="text-center py-4">Loading contacts...</div>}
    </motion.div>
  );
};

export default ContactInfo;

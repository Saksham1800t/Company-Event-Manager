import React, { useEffect, useState } from "react";
import LogoutButton from "../LogoutButton";
import UserDashboard from "./UserDashboard";
import { Link } from "react-router";
import NotificationBadge from "./NotificationBadge";
import { fetchAllNotifications } from "../../api";

const UserPage = () => {
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    const fetchBadgeCount = async () => {
      try {
        const notifData = await fetchAllNotifications();
        const total = notifData.overdue.length + notifData.today.length;
        setBadgeCount(total);
      } catch (error) {
        console.error("Error fetching notification count:", error);
      }
    };
    fetchBadgeCount();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center bg-rose-400 text-white px-6 py-4 shadow-md">
        <h2 className="text-xl font-semibold">Welcome User</h2>
        <div className="flex items-center space-x-4">
          <NotificationBadge badgeCount={badgeCount} />
          <Link to="/calendar">
            <button className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 shadow">
              Calendar
            </button>
          </Link>
          <LogoutButton />
        </div>
      </nav>

      <div className="p-6">
        <UserDashboard setBadgeCount={setBadgeCount} />
      </div>
    </div>
  );
};

export default UserPage;

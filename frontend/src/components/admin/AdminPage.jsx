import React from "react";
import LogoutButton from "../LogoutButton";
import { Link } from "react-router";
import { FaPlusCircle } from "react-icons/fa";
import CompaniesList from "./CompaniesList";

const AdminPage = () => {
  return (
    <>
      <nav className="bg-rose-400 p-4 text-white flex justify-between items-center">
        <div className="text-xl font-bold">Welcome to Admin Dashboard</div>
        <div className="flex items-center space-x-6">
          <Link
            to="/admin/create-company"
          >
            <button className="flex items-center bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 shadow">
              <FaPlusCircle className="mr-1" />
              Create Company
            </button>

          </Link>
          <div className="flex items-center">
            <LogoutButton />
          </div>
        </div>
      </nav>
      <CompaniesList />
    </>
  );
};

export default AdminPage;

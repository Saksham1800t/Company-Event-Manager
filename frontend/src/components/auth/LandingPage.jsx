import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-red-400 to-pink-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Calender 😊</h1>
      <p className="text-xl mb-8 text-center max-w-lg">
        Manage your communications efficiently and never miss an important
        update again. Our application helps you stay on top of your schedule
        with ease.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/signup"
          className="bg-white text-red-500 font-semibold py-2 px-4 rounded hover:bg-gray-200"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-transparent border border-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-red-500"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-m bg-gray-500 text-white">
      <h3 className=" font-bold ">Github search</h3>
      <span>
        <Link
          to="/"
          className="mr-2 cursor-pointer hover:text-teal-800 transition-all"
        >
          Home
        </Link>
        <Link
          to="/favorite"
          className=" cursor-pointer hover:text-teal-800 transition-all"
        >
          Favorites
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;

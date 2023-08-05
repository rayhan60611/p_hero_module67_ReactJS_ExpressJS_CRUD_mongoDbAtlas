import { Link } from "react-router-dom";
// import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 bg-red-400">
      <Link
        className="hover:bg-green-400 p-4 text-white font-bold duration-500"
        to="/"
      >
        Home
      </Link>
      <Link
        className="hover:bg-green-400 p-4 text-white font-bold duration-500"
        to="/users"
      >
        Users
      </Link>
    </div>
  );
};

export default Navbar;

// Navbar.jsx
import React from "react";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-bluecolor h-16 w-full p-4 flex items-center justify-center z-10">
      <FontAwesomeIcon icon={faTrainSubway} className="text-xl text-white" />
      <h1 className="text-2xl text-white font-bold ml-2">AIMS Server</h1>
    </div>
  );
};

export default Navbar;

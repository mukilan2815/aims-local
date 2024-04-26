import React from "react";

import Navbar from "./Navbar";
import "../../App.css";
import Msidebar from "./Marketing/Msidebar";

const Marketinghome = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        <Msidebar />
      </div>
    </>
  );
};

export default Marketinghome;

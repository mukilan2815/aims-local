import React from "react";

import Navbar from "./Navbar";
import "../../App.css";
import SidebarComponent from "./Ratefixing/RFSidebar";

const Ratefixinghome = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        <SidebarComponent />
      </div>
    </>
  );
};

export default Ratefixinghome;

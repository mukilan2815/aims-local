import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MarketingImage from "./Images/Marketing.png";
import ProgressImage from "./Images/progress.png";
import RateFixingImage from "./Images/RF.png";
import ShopImage from "./Images/sf.png";
import InspectionImage from "./Images/inspection.png";
import PlanningImage from "./Images/planning.png";
import MarketingLogin from "./Pages/Logins/Marketinglogin.jsx";
import Planninglogin from "./Pages/Logins/Planninglogin.jsx";
import Progress from "./Pages/Logins/Progresslogin.jsx";
import RateFixingLogin from "./Pages/Logins/Ratefixinglogin.jsx";
import Inspection from "./Pages/Logins/Inspectionlogin.jsx";
import ShopFloor from "./Pages/Logins/Shopfloorlogin.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-3xl trainone font-bold mb-4">AIMS PORTAL</h1>
      <p className="text-sm text-gray-600 mb-8">
        Signalling & Telecommunication Workshop, Podanur
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {[
          { title: "Marketing", image: MarketingImage, path: "/marketing" },
          { title: "Planning", image: PlanningImage, path: "/planning" },
          {
            title: "RateFixing",
            image: RateFixingImage,
            path: "/ratefixing",
          },
          { title: "Progress", image: ProgressImage, path: "/progress" },
          { title: "Shop Floor", image: ShopImage, path: "/shopfloor" },
          {
            title: "Inspection",
            image: InspectionImage,
            path: "/inspection",
          },
        ].map((item, index) => (
          <Link key={index} to={item.path}>
            <div className="relative cursor-pointer overflow-hidden bg-gray-200 transition-all1 rounded-md transition-all trans  shadow-lg transform hover:scale-96 neumorphic">
              <div className="p-10 shadow-lg">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <div className="absolute trans top-0 left-0 w-full h-full bg-gray-200 opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="/marketing" element={<MarketingLogin />} />
        <Route path="/planning" element={<Planninglogin />} />
        <Route path="/ratefixing" element={<RateFixingLogin />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/shopfloor" element={<ShopFloor />} />
        <Route path="/inspection" element={<Inspection />} />
      </Routes>
    </div>
  );
}

export default App;

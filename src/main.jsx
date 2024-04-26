import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Marketing from "./Pages/Logins/Marketinglogin.jsx";
import Planning from "./Pages/Logins/Planninglogin.jsx";
import Progress from "./Pages/Logins/Progresslogin.jsx";
import Ratefixing from "./Pages/Logins/Ratefixinglogin.jsx";
import Inspection from "./Pages/Logins/Inspectionlogin.jsx";
import Shopfloor from "./Pages/Logins/Shopfloorlogin.jsx";
import Marketinghome from "./Pages/Home/Marketinghome.jsx";
import Planninghome from "./Pages/Home/Planninghome.jsx";
import Ratefixinghome from "./Pages/Home/Ratefixinghome.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/ratefixing" element={<Ratefixing />} />
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/shopfloor" element={<Shopfloor />} />
          <Route path="/marketinghome" element={<Marketinghome />} />
          <Route path="/planninghome" element={<Planninghome />} />
          <Route path="/ratefixinghome" element={<Ratefixinghome />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

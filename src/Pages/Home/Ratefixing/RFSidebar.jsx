import React, { useState } from "react";
import {
  AppstoreOutlined,
  ToolTwoTone,
  SettingOutlined,
  RightCircleFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Addcomponent from "./Masters/Addcomponent";
import ExampleWithProviders from "./Masters/Viewcomponents";
import Viewproductexample from "./Masters/Viewproduct";
import Addshop from "./Masters/Addshop";
import Viewshopprovider from "./Masters/Viewshop";
import Addsubassembly from "./Masters/Addsubassembly";
import Viewsubassemblyprovider from "./Masters/Viewsubassembly";
import Addoperation from "./Masters/Addoperation";
import Viewoperation from "./Masters/Viewoperaion";
import Createjobcard from "./Transaction/Createjobcard";
import Newjobcardprovider from "./Transaction/newjobcard";
import Printjobcards from "./Transaction/Printjobcard";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Masters", "main1", <FontAwesomeIcon icon={faCoins} />),
  getItem("Component & prd", "sub1", <ToolTwoTone />, [
    getItem("Add component", "1", <RightCircleFilled />),
    getItem("View Component", "2", <RightCircleFilled />),
    getItem("View Product", "3", <RightCircleFilled />),
  ]),
  getItem("Shop", "sub2", <AppstoreOutlined />, [
    getItem("Add Shop", "4", <RightCircleFilled />),
    getItem("View Shop", "5", <RightCircleFilled />),
  ]),
  getItem("Sub Assembly", "sub4", <SettingOutlined />, [
    getItem("Add Sub Assembly", "6", <RightCircleFilled />),
    getItem("View Sub Assemblies", "7", <RightCircleFilled />),
  ]),
  getItem("Operations", "sub5", <SettingOutlined />, [
    getItem("Add Operation", "8", <RightCircleFilled />),
    getItem("View Operations", "9", <RightCircleFilled />),
  ]),

  getItem("Transactions", "main2", <FontAwesomeIcon icon={faCoins} />),
  getItem("Jobcards", "sub3", <ToolTwoTone />, [
    getItem("Create JobCards", "10", <RightCircleFilled />),
    getItem("View new JobCards", "11", <RightCircleFilled />),
    getItem("View all JobCards", "12", <RightCircleFilled />),
    getItem("Print JobCards", "13", <RightCircleFilled />),
    getItem("Cancel JobCards", "14", <RightCircleFilled />),
  ]),
  getItem("JC Closure Code", "sub6", <AppstoreOutlined />, [
    getItem("Generate Code", "15", <RightCircleFilled />),
    getItem("View Codes", "16", <RightCircleFilled />),
  ]),
  getItem("Material Requisition", "sub7", <SettingOutlined />, [
    getItem("Material Request", "17", <RightCircleFilled />),
    getItem("View Request", "18", <RightCircleFilled />),
  ]),

  getItem("Reports", "main3", <FontAwesomeIcon icon={faCoins} />),
  getItem("Report Generation", "sub8", <ToolTwoTone />, [
    getItem("JobCard Report", "19", <RightCircleFilled />),
    getItem("Material Requisition Report", "20", <RightCircleFilled />),
    getItem("WO Pos Report", "21", <RightCircleFilled />),
    getItem("Consolidated JC track Report", "22", <RightCircleFilled />),
  ]),
];

const SidebarComponent = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState();
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showViewComponent, setShowViewComponent] = useState(false);
  const [showViewproduct, setShowViewproduct] = useState(false);
  const [showAddshop, setShowAddshop] = useState(false);
  const [showviewshop, setShowviewshop] = useState(false);
  const [showaddsubassembly, setshowaddsubassembly] = useState(false);
  const [showviewsubassembly, setshowviewsubassembly] = useState(false);
  const [showaddoperation, setshowaddoperation] = useState(false);
  const [showviewoperation, setshowviewoperation] = useState(false);
  const [showjobcard, setshowjobcard] = useState(false);
  const [viewalljobcard, setshowviewalljobcard] = useState(false);
  const [Printjobcard, setprintjobcard] = useState(false);
  const onClick = (event) => {
    if (event.key === "1") {
      setShowAddComponent(true);
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowviewsubassembly(false);
      setshowaddoperation(false);
      setshowviewoperation(false);
      setprintjobcard(false);

      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "2") {
      setShowAddComponent(false);
      setprintjobcard(false);
      setShowViewComponent(true);
      setShowViewproduct(false);
      setshowaddsubassembly(false);
      setshowviewsubassembly(false);
      setshowaddoperation(false);
      setShowviewshop(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "3") {
      setShowViewComponent(false);
      setShowViewproduct(true);
      setShowviewshop(false);
      setShowAddshop(false);
      setprintjobcard(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "4") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(true);
      setShowviewshop(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowaddsubassembly(false);
      setprintjobcard(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "5") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setprintjobcard(false);
      setshowviewsubassembly(false);
      setShowviewshop(true);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "6") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(true);
      setshowviewsubassembly(false);
      setshowaddoperation(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setprintjobcard(false);

      setshowviewalljobcard(false);
    } else if (event.key === "7") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setprintjobcard(false);
      setshowviewsubassembly(true);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "8") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(true);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setprintjobcard(false);
      setshowviewalljobcard(false);
    } else if (event.key === "9") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(true);
      setshowjobcard(false);
      setshowviewalljobcard(false);
      setprintjobcard(false);
    } else if (event.key === "10") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(true);
      setshowviewalljobcard(false);
      setprintjobcard(false);
    } else if (event.key === "11") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(true);
      setprintjobcard(false);
    } else if (event.key === "12") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(true);
      setprintjobcard(false);
    } else if (event.key === "13") {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setShowviewshop(false);
      setshowaddsubassembly(false);
      setshowaddoperation(false);
      setshowviewsubassembly(false);
      setshowviewoperation(false);
      setshowjobcard(false);
      setshowviewalljobcard(false);
      setprintjobcard(true);
    } else {
      setShowViewComponent(false);
      setShowViewproduct(false);
      setShowAddshop(false);
      setshowviewsubassembly(false);
      setShowviewshop(false);
      setshowaddoperation(false);
      setshowviewoperation(false);
      setshowaddsubassembly(false);
      setshowjobcard(false);
      setprintjobcard(false);
      setshowviewalljobcard(false);
    }

    setCurrent(event.key);
    console.log("onClick executed:", showAddComponent);
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={showAddComponent ? ["sub1"] : []}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineIndent={16}
      />

      {showAddComponent ? <Addcomponent /> : null}
      {showViewComponent ? <ExampleWithProviders /> : null}
      {showViewproduct ? <Viewproductexample /> : null}
      {showAddshop ? <Addshop /> : null}
      {showviewshop ? <Viewshopprovider /> : null}
      {showaddsubassembly ? <Addsubassembly /> : null}
      {showviewsubassembly ? <Viewsubassemblyprovider /> : null}
      {showaddoperation ? <Addoperation /> : null}
      {showviewoperation ? <Viewoperation /> : null}
      {showjobcard ? <Createjobcard /> : null}
      {viewalljobcard ? <Newjobcardprovider /> : null}
      {Printjobcard ? <Printjobcards /> : null}
      {}
    </>
  );
};

export default SidebarComponent;

import React, { useState } from "react";
import {
  AppstoreOutlined,
  ToolTwoTone,
  SettingOutlined,
  RightCircleFilled,
  UserOutlined,
  FireOutlined,
  BarChartOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faCogs,
  faChartBar,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import Addproduct from "./Masters/Addproduct";
import ViewProduct from "./Masters/ViewProducts";
import AddComponent from "./Masters/Addcomponent";
import Viewcomponent from "./Masters/Viewcomponent";
import Addunits from "./Masters/AddUnits";
import Viewunits from "./Masters/Viewunits";
import Adddepartments from "./Masters/Adddepartment";
import Viewdepartment from "./Masters/Viewdepartment";
import Addrailways from "./Masters/Addrailways";
import Viewrailways from "./Masters/Viewrailways";
import Importrailways from "./Masters/Importrailways";
import Viewdivision from "./Masters/Viewdivision";
import Importdivisions from "./Masters/impordivisions";

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
  getItem("Products", "sub1", <ToolTwoTone />, [
    getItem("Add Product", "1", <RightCircleFilled />),
    getItem("View Product", "2", <RightCircleFilled />),
  ]),
  getItem("Component", "sub2", <AppstoreOutlined />, [
    getItem("Add Component", "3", <RightCircleFilled />),
    getItem("View Component", "4", <RightCircleFilled />),
  ]),
  getItem("Unit", "sub3", <SettingOutlined />, [
    getItem("Add Unit", "5", <RightCircleFilled />),
    getItem("View Unit", "6", <RightCircleFilled />),
  ]),
  getItem("Department", "sub4", <SettingOutlined />, [
    getItem("Add Department", "7", <RightCircleFilled />),
    getItem("View Department(s)", "8", <RightCircleFilled />),
  ]),
  getItem("Railway", "sub5", <SettingOutlined />, [
    getItem("Add Railway", "9", <RightCircleFilled />),
    getItem("View Railway(s)", "10", <RightCircleFilled />),
    getItem("Import Railway(s)", "11", <RightCircleFilled />),
  ]),
  getItem("Divisions", "sub6", <SettingOutlined />, [
    getItem("Add Divisions", "12", <RightCircleFilled />),
    getItem("View Divisions(s)", "13", <RightCircleFilled />),
    getItem("Import Divisions(s)", "14", <RightCircleFilled />),
  ]),
  getItem("Count Officers", "sub7", <SettingOutlined />, [
    getItem("Add Count Officers", "15", <RightCircleFilled />),
    getItem("View Count Officers", "16", <RightCircleFilled />),
    getItem("Import Count Officers(s)", "17", <RightCircleFilled />),
  ]),
  getItem("Consignees", "sub8", <SettingOutlined />, [
    getItem("Add Consignees", "18", <RightCircleFilled />),
    getItem("View Consignees(s)", "19", <RightCircleFilled />),
  ]),
  getItem("BOM", "sub9", <SettingOutlined />, [
    getItem("Add BOM", "20", <RightCircleFilled />),
    getItem("View BOM(s)", "21", <RightCircleFilled />),
  ]),
  getItem("Hourly Rate Inputs", "sub10", <SettingOutlined />, [
    getItem("Add Rate Inputs", "22", <RightCircleFilled />),
    getItem("View Rate Inputs(s)", "23", <RightCircleFilled />),
  ]),

  getItem("Transactions", "main2", <FontAwesomeIcon icon={faCoins} />),
  getItem("Dmd Registration", "sub11", <ToolTwoTone />, [
    getItem("Add Demand", "24", <RightCircleFilled />),
    getItem("View Demand(s)", "25", <RightCircleFilled />),
    getItem("Demand Report(s)", "26", <RightCircleFilled />),
    getItem("Supply Report(s)", "27", <RightCircleFilled />),
  ]),
  getItem("Work Order(B)", "sub12", <AppstoreOutlined />, [
    getItem("Add Work Order", "28", <RightCircleFilled />),
    getItem("View Work Order", "29", <RightCircleFilled />),
    getItem("View Closed Work Order", "30", <RightCircleFilled />),
  ]),
  getItem("MDS", "sub13", <SettingOutlined />, [
    getItem("View MDS", "31", <RightCircleFilled />),
  ]),
  getItem("Item Rate Revision", "sub14", <SettingOutlined />, [
    getItem("Generate Rate", "32", <RightCircleFilled />),
  ]),
  getItem("Rate", "sub15", <SettingOutlined />, [
    getItem("Add Rate", "33", <RightCircleFilled />),
    getItem("View Rate", "34", <RightCircleFilled />),
  ]),
  getItem("Production Schedule", "sub16", <SettingOutlined />, [
    getItem("View Schedule", "35", <RightCircleFilled />),
  ]),
  getItem("Supply  Demand(s)", "sub17", <SettingOutlined />, [
    getItem("Add Supply", "36", <RightCircleFilled />),
  ]),
  getItem("Consignee  WorkOrder(s)", "sub18", <SettingOutlined />, [
    getItem("Add Supply", "37", <RightCircleFilled />),
  ]),

  getItem("Reports", "main3", <FontAwesomeIcon icon={faCoins} />),
  getItem("Work Order ", "sub19", <ToolTwoTone />, [
    getItem("Total Workorder", "38", <RightCircleFilled />),
  ]),
  getItem("Demand Reports ", "sub20", <ToolTwoTone />, [
    getItem("Total Demand(s)", "39", <RightCircleFilled />),
    getItem("Cancelled/Closed Demand(s)", "40", <RightCircleFilled />),
  ]),
  getItem("MDS Report ", "sub21", <ToolTwoTone />, [
    getItem("Total Workorder", "41", <RightCircleFilled />),
  ]),
];

const Msidebar = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showViewproduct, setShowViewproduct] = useState(false);
  const [showAddcomponent, setShowaddcomponent] = useState(false);
  const [showViewcomponent, setShowviewcomponent] = useState(false);
  const [showaddunit, setshowaddunits] = useState(false);
  const [showviewunit, setshowviewunit] = useState(false);
  const [showadddepartment, setshowadddepartment] = useState(false);
  const [showviewdepartment, setshowviewdepartment] = useState(false);
  const [showaddrailways, setshowaddrailways] = useState(false);
  const [showviewrailways, setshowviewrailways] = useState(false);
  const [showimportrailways, setshowimportrailways] = useState(false);
  const [showviewdivision, setshowviewdivision] = useState(false);
  const [showimportdivision, setshowdivision] = useState(false);

  const onClick = (event) => {
    if (event.key === "1") {
      setShowAddProduct(true);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "2") {
      setShowAddProduct(false);
      setShowViewproduct(true);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "3") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(true);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "4") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(true);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "5") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(true);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "6") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(true);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "7") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(true);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "8") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(true);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "9") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(true);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "10") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(true);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "11") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(true);
      setshowviewdivision(false);
      setshowdivision(false);
    } else if (event.key === "13") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(true);
      setshowdivision(false);
    } else if (event.key === "14") {
      setShowAddProduct(false);
      setShowViewproduct(false);
      setShowaddcomponent(false);
      setShowviewcomponent(false);
      setshowaddunits(false);
      setshowviewunit(false);
      setshowadddepartment(false);
      setshowviewdepartment(false);
      setshowaddrailways(false);
      setshowviewrailways(false);
      setshowimportrailways(false);
      setshowviewdivision(false);
      setshowdivision(true);
    }
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={showAddcomponent ? ["sub1"] : []}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineIndent={16}
      />
      {showAddProduct && <Addproduct />}
      {showViewproduct && <ViewProduct />}
      {showAddcomponent && <AddComponent />}
      {showViewcomponent && <Viewcomponent />}
      {showaddunit && <Addunits />}
      {showviewunit && <Viewunits />}
      {showadddepartment && <Adddepartments />}
      {showviewdepartment && <Viewdepartment />}
      {showaddrailways && <Addrailways />}
      {showviewrailways && <Viewrailways />}
      {showimportrailways && <Importrailways />}
      {showviewdivision && <Viewdivision />}
      {showimportdivision && <Importdivisions />}
    </>
  );
};

export default Msidebar;

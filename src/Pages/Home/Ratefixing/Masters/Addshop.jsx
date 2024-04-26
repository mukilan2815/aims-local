import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Addshop = () => {
  const addshop = (formData) => {
    console.log("Adding component:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      shopIncharge: event.target.shopIncharge.value,
      shopName: event.target.shopName.value,
      shortCode: event.target.shortCode.value,
      shopCode: event.target.shopCode.value,
      ipAddress: event.target.ipAddress.value,
      attendanceReaderIn: event.target.attendanceReaderIn.value,
      attendanceReaderOut: event.target.attendanceReaderOut.value,
    };

    addshop(formData);
    event.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="shopIncharge"
            className="block text-sm font-medium text-gray-600"
          >
            Shop Incharge
          </label>
          <input
            type="text"
            id="shopIncharge"
            placeholder="Enter Shop Incharge"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shopName"
            className="block text-sm font-medium text-gray-600"
          >
            Shop Name
          </label>
          <input
            type="text"
            id="shopName"
            placeholder="Enter Shop Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shortCode"
            className="block text-sm font-medium text-gray-600"
          >
            Short Code
          </label>
          <input
            type="text"
            id="shortCode"
            placeholder="Enter Short Code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shopCode"
            className="block text-sm font-medium text-gray-600"
          >
            Shop Code
          </label>
          <input
            type="text"
            id="shopCode"
            placeholder="Enter Shop Code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ipAddress"
            className="block text-sm font-medium text-gray-600"
          >
            IP Address
          </label>
          <input
            type="text"
            id="ipAddress"
            placeholder="Enter IP Address"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="attendanceReaderIn"
            className="block text-sm font-medium text-gray-600"
          >
            Attendance Reader In
          </label>
          <input
            type="text"
            id="attendanceReaderIn"
            placeholder="Enter Attendance Reader In"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="attendanceReaderOut"
            className="block text-sm font-medium text-gray-600"
          >
            Attendance Reader Out
          </label>
          <input
            type="text"
            id="attendanceReaderOut"
            placeholder="Enter Attendance Reader Out"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full items-center  p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Component{"    "}
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="text-xl items-center font-color"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addshop;

import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Createjobcard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      item: event.target.item.value,
      shop: event.target.shop.value,
      subAssembly: event.target.subAssembly.value,
      workOrder: event.target.workOrder.value,
      referenceNo: event.target.referenceNo.value,
      remarks: event.target.remarks.value,
    };

    console.log("Form Data:", formData);

    event.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <form
        className="grid grid-cols-1 md:grid-cols-1 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Item
          </label>
          <select
            id="item"
            name="item"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="shop"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Shop
          </label>
          <select
            id="shop"
            name="shop"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="shop1">Shop 1</option>
            <option value="shop2">Shop 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="subAssembly"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Sub-Assembly
          </label>
          <select
            id="subAssembly"
            name="subAssembly"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="sub1">Sub-Assembly 1</option>
            <option value="sub2">Sub-Assembly 2</option>
          </select>
        </div>

        {/* New input boxes for work order, reference number, and remarks */}
        <div className="mb-4">
          <label
            htmlFor="workOrder"
            className="block text-sm font-medium text-gray-600"
          >
            Work Order
          </label>
          <input
            type="text"
            id="workOrder"
            name="workOrder"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="referenceNo"
            className="block text-sm font-medium text-gray-600"
          >
            Reference No
          </label>
          <input
            type="text"
            id="referenceNo"
            name="referenceNo"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="remarks"
            className="block text-sm font-medium text-gray-600"
          >
            Remarks
          </label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Continue
            <FontAwesomeIcon icon={faArrowCircleRight} className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createjobcard;

import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Addsubassembly = () => {
  const addsubassembly = (formData) => {
    // Implement the addComponent logic here
    console.log("Adding component:", formData);
    // Add your logic to handle the form data, e.g., making an API call
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      componentType: event.target.componentType.value,
      shop: event.target.shop.value,
      drawingNumber: event.target.drawingNumber.value,
      subAssemblyName: event.target.subAssemblyName.value,
      qps: event.target.qps.value,
    };

    addsubassembly(formData);
    event.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Choose
          </label>
          <div className="flex">
            <input
              type="radio"
              id="product"
              name="componentType"
              value="product"
              className="mr-2"
            />
            <label htmlFor="product" className="mr-4">
              Product
            </label>
            <input
              type="radio"
              id="component"
              name="componentType"
              value="component"
              className="mr-2"
            />
            <label htmlFor="component">Component</label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="shop"
            className="block text-sm font-medium text-gray-600"
          >
            Shop
          </label>
          <input
            type="text"
            id="shop"
            placeholder="Enter Shop"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="drawingNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Drawing Number
          </label>
          <input
            type="text"
            id="drawingNumber"
            placeholder="Enter Drawing Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subAssemblyName"
            className="block text-sm font-medium text-gray-600"
          >
            Sub-Assembly Name
          </label>
          <input
            type="text"
            id="subAssemblyName"
            placeholder="Enter Sub-Assembly Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="qps"
            className="block text-sm font-medium text-gray-600"
          >
            Qps
          </label>
          <input
            type="text"
            id="qps"
            placeholder="Enter Qps"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
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

export default Addsubassembly;

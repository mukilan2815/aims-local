import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Addoperation = () => {
  const addoperation = (formData) => {
    console.log("Adding operation:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      componentType: event.target.componentType.value,
      productType: event.target.productType.value,
      componentType: event.target.componentType.value,
      shop: event.target.shop.value,
      drawingNumber: event.target.drawingNumber.value,
      subAssembly: event.target.subAssembly.value,
      operation: event.target.operation.value,
      operationNumber: event.target.operationNumber.value,
      qps: event.target.qps.value,
      locationCode: event.target.locationCode.value,
      preparationTime: event.target.preparationTime.value,
      allowedTime: event.target.allowedTime.value,
    };

    addoperation(formData);
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
            Choose Component Type
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
            htmlFor="productType"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Product Type
          </label>
          <select
            id="productType"
            name="productType"
            className="w-full p-2 border border-gray-300 rounded"
          >
            {/* Add options for product types */}
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
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
            name="shop"
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
            name="drawingNumber"
            placeholder="Enter Drawing Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subAssembly"
            className="block text-sm font-medium text-gray-600"
          >
            Sub-Assembly
          </label>
          <select
            id="subAssembly"
            name="subAssembly"
            className="w-full p-2 border border-gray-300 rounded"
          >
            {/* Add options for sub-assemblies */}
            <option value="sub1">Sub-Assembly 1</option>
            <option value="sub2">Sub-Assembly 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="operation"
            className="block text-sm font-medium text-gray-600"
          >
            Operation
          </label>
          <textarea
            id="operation"
            name="operation"
            placeholder="Enter Operation"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="operationNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Operation Number
          </label>
          <input
            type="text"
            id="operationNumber"
            name="operationNumber"
            placeholder="Enter Operation Number"
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
            name="qps"
            placeholder="Enter Qps"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="locationCode"
            className="block text-sm font-medium text-gray-600"
          >
            Location Code
          </label>
          <input
            type="text"
            id="locationCode"
            name="locationCode"
            placeholder="Enter Location Code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="preparationTime"
            className="block text-sm font-medium text-gray-600"
          >
            Preparation Time
          </label>
          <input
            type="text"
            id="preparationTime"
            name="preparationTime"
            placeholder="Enter Preparation Time"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="allowedTime"
            className="block text-sm font-medium text-gray-600"
          >
            Allowed Time
          </label>
          <input
            type="text"
            id="allowedTime"
            name="allowedTime"
            placeholder="Enter Allowed Time"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full items-center  p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Operation{" "}
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

export default Addoperation;

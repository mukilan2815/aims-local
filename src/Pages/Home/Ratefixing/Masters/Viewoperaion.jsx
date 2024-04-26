import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Viewoperation = () => {
  const viewoperation = (formData) => {
    console.log("Adding operation:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      componentType: event.target.componentType.value,
      productType: event.target.productType.value,
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

    viewoperation(formData);
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

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full items-center  p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Generate{" "}
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

export default Viewoperation;

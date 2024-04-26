import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const AddComponent = () => {
  const addComponent = (formData) => {
    console.log("Adding component:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      componentType: event.target.componentType.value,
      oldPLNo: event.target.oldPLNo.value,
      upNo: event.target.upNo.value,
      plNo: event.target.plNo.value,
      briefDescription: event.target.briefDescription.value,
      detailedDescription: event.target.detailedDescription.value,
      selectUnit: event.target.selectUnit.value,
      componentRate: event.target.componentRate.value,
      availabilityStock: event.target.availabilityStock.value,
      previousPurchaseValue: event.target.previousPurchaseValue.value,
      closingShop: event.target.closingShop.value,
      shopFlow: event.target.shopFlow.value,
      category: event.target.category.value,
      requiredFor: event.target.requiredFor.value,
    };

    addComponent(formData);
    event.target.reset();
  };
  return (
    <div className="max-w-2xl mx-auto my-8">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="componentType"
            className="block text-sm font-medium text-gray-600"
          >
            Component Type
          </label>
          <select
            name="componentType"
            id="componentType"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Component Type</option>
            <option value="stock">Stock</option>
            <option value="nonStock">Non-Stock</option>
            <option value="toolsPlants">Tools & Plants</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="oldPLNo"
            className="block text-sm font-medium text-gray-600"
          >
            Old PL No:
          </label>
          <input
            type="number"
            id="oldPLNo"
            placeholder="Enter Old PL Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="upNo"
            className="block text-sm font-medium text-gray-600"
          >
            UP No:
          </label>
          <input
            type="number"
            id="upNo"
            placeholder="Enter UP Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="plNo"
            className="block text-sm font-medium text-gray-600"
          >
            PL No:
          </label>
          <input
            type="number"
            id="plNo"
            placeholder="Enter PL Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="briefDescription"
            className="block text-sm font-medium text-gray-600"
          >
            Brief Description
          </label>
          <input
            type="text"
            id="briefDescription"
            placeholder="Enter Name of the Component"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="detailedDescription"
            className="block text-sm font-medium text-gray-600"
          >
            Detailed Description
          </label>
          <textarea
            name="detailedDescription"
            id="detailedDescription"
            placeholder="Enter the Description of the Component"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="selectUnit"
            className="block text-sm font-medium text-gray-600"
          >
            Select Unit
          </label>
          <select
            name="selectUnit"
            id="selectUnit"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select the Unit</option>
            <option value="kg">Kg</option>
            <option value="mtr">Mtr</option>
            <option value="set">Set</option>
            <option value="lit">Lit</option>
            <option value="nos">Nos</option>
            <option value="mt">MT</option>
            <option value="pair">Pair</option>
            <option value="pack">PACK</option>
            <option value="cuM">Cu.M</option>
            <option value="dozen">Dozen</option>
            <option value="quintal">Quintal</option>
            <option value="sheet">SHEET</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="componentRate"
            className="block text-sm font-medium text-gray-600"
          >
            Component Rate
          </label>
          <input
            type="text"
            id="componentRate"
            placeholder="Enter the Rate of the Component"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="availabilityStock"
            className="block text-sm font-medium text-gray-600"
          >
            Availability Stock
          </label>
          <input
            type="text"
            id="availabilityStock"
            placeholder="Enter the Availability Stock"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="previousPurchaseValue"
            className="block text-sm font-medium text-gray-600"
          >
            Previous Purchase Value
          </label>
          <input
            type="text"
            id="previousPurchaseValue"
            placeholder="Enter the Previous Purchase Value"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="closingShop"
            className="block text-sm font-medium text-gray-600"
          >
            Closing Shop
          </label>
          <select
            name="closingShop"
            id="closingShop"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Shops</option>
            <option value="forgeSmithy">
              Forge and Smithy Shop/???? ??? ?????? ???
            </option>
            <option value="machineShop">Machine Shop/???? ???</option>
            <option value="fabricationShop">Fabrication Shop/???????</option>
            <option value="electroMechanicalAssembly1">
              Electro Mechanical Assembly-I/?????? ??????? ????????-I
            </option>
            <option value="electroMechanicalAssembly2">
              Electro Mechanical Assembly-II
            </option>
            <option value="relayShop">Relay Shop/????? ???</option>
            <option value="protectiveCoatingShop">
              Protective Coating Shop/????? ???
            </option>
            <option value="mechanicalMillWright">
              Mechanical Mill Wright/??????? ??? ????{" "}
            </option>
            <option value="electricalMillWright">
              Electrical Mill Wright/????? ??? ????{" "}
            </option>
            <option value="electronicSignalEquipmentDivision">
              Electronic Signal Equipment Division/?????? ??? ?????? ????{" "}
            </option>
            <option value="toolRoom">Tool Room/???? ?????</option>
            <option value="ratefixing">Ratefixing/?? ?????????</option>
            <option value="blockInstrumentSection1">
              Block Instrument Section/???? ???? ??????{" "}
            </option>
            <option value="electronicLab">Electronic Lab/?????????? ???</option>
            <option value="blockInstrumentSection2">
              Block Instrument Section
            </option>
            <option value="ratefixing2">Ratefixing/?? ???????</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="shopFlow"
            className="block text-sm font-medium text-gray-600"
          >
            Shop Flow
          </label>
          <input
            type="number"
            id="shopFlow"
            placeholder="Select an Unit"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select the Category</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="requiredFor"
            className="block text-sm font-medium text-gray-600"
          >
            Required for
          </label>
          <input
            type="number"
            id="requiredFor"
            placeholder="Select an Unit"
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

export default AddComponent;

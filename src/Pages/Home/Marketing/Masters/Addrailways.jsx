import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Addrailways = () => {
  const addComponent = (formData) => {
    console.log("Adding component:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      railways: event.target.railways.value,
      shortcode: event.target.shortcode.value,
      contact: event.target.contact.value,
    };

    addComponent(formData);
    event.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <form className="grid grid-cols-1 gap-4">
        <div className="mb-4">
          <label
            htmlFor="railways"
            className="block text-sm font-medium text-gray-600"
          >
            Railways
          </label>
          <input
            type="text"
            id="railways"
            placeholder="Enter Unit"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shortcode"
            className="block text-sm font-medium text-gray-600"
          >
            Short Code
          </label>
          <input
            type="text"
            id="shortcode"
            placeholder="Enter Unit Description"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-600"
          >
            Contact Deatils
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Enter Decimal"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full  items-center  p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Component
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="text-xl ml-5 items-center font-color"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addrailways;

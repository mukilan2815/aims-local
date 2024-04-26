import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Adddepartments = () => {
  const addComponent = (formData) => {
    console.log("Adding component:", formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      department: event.target.department.value,
     
    };

    addComponent(formData);
    event.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <form className="grid grid-cols-1 gap-4">
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-600"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            placeholder="Enter department name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>


        <div className="col-span-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full  items-center  p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Department
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

export default Adddepartments;

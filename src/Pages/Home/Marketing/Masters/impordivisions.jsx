import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const Importdivisions = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFile = (data, fileInfo) => {
    console.log("CSV Data:", data);
    setCsvData(data);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const clearData = () => {
    setCsvData([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <CSVReader
          onFileLoaded={handleFile}
          onError={handleOnError}
          inputId="csv-input"
          inputStyle={{ display: "none" }}
        />
        <label
          htmlFor="csv-input"
          className="cursor-pointer block text-center p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Import CSV File
        </label>
        {csvData.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Imported Data:</h2>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  {csvData[0].map((header, index) => (
                    <th key={index} className="p-2 border">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-2 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={clearData}
              className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Clear Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Importdivisions;

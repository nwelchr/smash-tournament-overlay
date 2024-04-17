import React from "react";

function ControlButtons({ updateData, resetData }) {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
        onClick={updateData}
      >
        Update
      </button>
      <button
        className="bg-cyan-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetData}
      >
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;

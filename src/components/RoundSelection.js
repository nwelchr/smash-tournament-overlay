import React from "react";
import Select from "react-select";

function RoundSelection({
  data,
  handleInputChange,
  handleSelectChange,
  roundOptions,
}) {
  return (
    <div className="mt-8 w-1/2">
      <Select
        name="round"
        options={roundOptions}
        className="w-full"
        placeholder="Select Tournament Round"
        onChange={handleSelectChange}
      />
      {["winnersRound", "losersRound"].includes(data.round) && (
        <input
          type="number"
          name="roundNumber"
          value={data.roundNumber}
          onChange={handleInputChange}
          placeholder="Round Number"
          className="mt-2 p-2 w-full bg-transparent border-b-2 border-gray-300 outline-none"
        />
      )}
    </div>
  );
}

export default RoundSelection;

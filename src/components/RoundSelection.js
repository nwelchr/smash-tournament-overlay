import React from "react";
import Select from "react-select";

function RoundSelection({
  data,
  handleInputChange,
  handleSelectChange,
  roundOptions,
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "rgba(31, 41, 55)",
      borderColor: "rgba(31, 41, 55)",
      color: "white",
      boxShadow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgba(31, 41, 55)",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      width: "150px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgba(55, 65, 81)"
        : "rgba(31, 41, 55)",
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "rgba(55, 65, 81)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <div className="flex w-full justify-center mt-8">
      <div className="flex items-center gap-x-20">
        <div className="flex items-center">
          <Select
            name="round"
            options={roundOptions}
            styles={customStyles}
            className="w-full mr-4"
            placeholder="Select Round"
            value={roundOptions.find((option) => option.value === data.round)}
            onChange={handleSelectChange}
          />
          <input
            type="number"
            name="roundNumber"
            value={data.roundNumber}
            onChange={handleInputChange}
            placeholder="#"
            className={`p-2 w-16 bg-transparent border-b-2 border-gray-300 outline-none ${
              !["winnersRound", "losersRound"].includes(data.round)
                ? "opacity-5"
                : ""
            }`}
            disabled={!["winnersRound", "losersRound"].includes(data.round)}
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="mr-4 text-white font-light">Best of:</label>
          <input
            type="number"
            name="bestOf"
            value={data.bestOf}
            min={1}
            step={2}
            onChange={handleInputChange}
            className="p-2 w-16 bg-transparent border-b-2 border-gray-300 outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default RoundSelection;

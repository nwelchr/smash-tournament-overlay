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
      width: "100%",
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
    <div className="mt-8 flex w-1/2 items-center">
      <Select
        name="round"
        options={roundOptions}
        styles={customStyles}
        className="w-3/4"
        placeholder="Select Tournament Round"
        value={roundOptions.find((option) => option.value === data.round)}
        onChange={handleSelectChange}
      />
      <input
        type="number"
        name="roundNumber"
        value={data.roundNumber}
        onChange={handleInputChange}
        placeholder="Round Number"
        className="mt-2 ml-4 p-2 w-1/4 bg-transparent border-b-2 border-gray-300 outline-none"
        disabled={!["winnersRound", "losersRound"].includes(data.round)}
      />
    </div>
  );
}

export default RoundSelection;

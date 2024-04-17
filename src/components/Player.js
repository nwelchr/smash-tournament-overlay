import React from "react";
import Select from "react-select";

function Player({
  player,
  data,
  handleInputChange,
  handleScoreChange,
  characterOptions,
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
  };

  return (
    <div className="bg-gray-950 bg-opacity-50 p-12 rounded-md space-y-4">
      <h2
        className={`text-3xl font-light ${
          player === "player1" ? "text-purple-300" : "text-cyan-300"
        }`}
      >
        {player === "player1" ? "Player 1" : "Player 2"}
      </h2>
      <div className="flex items-center space-x-2">
        <button
          className={`bg-${
            player === "player1" ? "purple" : "cyan"
          }-700 hover:bg-${
            player === "player1" ? "purple" : "cyan"
          }-800 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleScoreChange(`${player}Score`, -1)}
        >
          –
        </button>
        <div className="text-white font-bold text-2xl w-12 text-center">
          {data[`${player}Score`]}
        </div>
        <button
          className={`bg-${
            player === "player1" ? "purple" : "cyan"
          }-700 hover:bg-${
            player === "player1" ? "purple" : "cyan"
          }-800 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleScoreChange(`${player}Score`, 1)}
        >
          +
        </button>
      </div>
      <input
        type="text"
        name={`${player}Tag`}
        value={data[`${player}Tag`]}
        onChange={handleInputChange}
        placeholder="Player Tag"
        className="w-full text-center bg-transparent border-b-2 border-gray-300 outline-none"
      />
      <Select
        name={`${player}Char`}
        options={characterOptions}
        styles={customStyles}
        className="w-full text-white"
        placeholder="Select Character"
        value={characterOptions.find(
          (option) => option.value === data[`${player}Char`]
        )}
        onChange={(option) =>
          handleInputChange({
            target: { name: `${player}Char`, value: option.value },
          })
        }
      />
    </div>
  );
}

export default Player;

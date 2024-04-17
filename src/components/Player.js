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
      backgroundColor: "rgba(31, 41, 55)", // dark background
      borderColor: "rgba(31, 41, 55)", // dark border
      color: "white", // this sets the text color for the control but not the input text
      boxShadow: "none", // removes box shadow
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgba(31, 41, 55)", // dark background for options
      color: "white", // sets text color for options
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // text color of the selected item
    }),
    input: (provided) => ({
      ...provided,
      color: "white", // ensures the text color you type is white
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgba(55, 65, 81)" // darker for selected option
        : "rgba(31, 41, 55)", // dark for other options
      color: "white", // text color for all options
      cursor: "pointer",
      ":hover": {
        backgroundColor: "rgba(55, 65, 81)", // darker on hover
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white", // ensures the placeholder text is also white
    }),
  };

  return (
    <div className="bg-gray-950 bg-opacity-50 p-12 rounded-md space-y-4">
      <h2
        className={`text-3xl font-light ${
          player === "player1" ? "text-purple-700" : "text-cyan-700"
        }`}
      >
        {player === "player1" ? "Player 1" : "Player 2"}
      </h2>
      <div className="flex items-center justify-center">
        <button
          className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleScoreChange(`${player}Score`, -1)}
        >
          –
        </button>
        <div className="text-white font-light text-6xl w-12 text-center">
          {data[`${player}Score`]}
        </div>
        <button
          className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full`}
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
        className="w-full text-center bg-transparent border-b-2 border-gray-800 outline-none"
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

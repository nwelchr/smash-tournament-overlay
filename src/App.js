import React, { useState } from "react";
import Player from "./components/Player";
import RoundSelection from "./components/RoundSelection";
import ControlButtons from "./components/ControlButtons";
import "./App.css";

function App() {
  const [data, setData] = useState({
    player1Score: 0,
    player2Score: 0,
    player1Tag: "",
    player2Tag: "",
    player1Char: "",
    player2Char: "",
    round: "",
    roundNumber: "",
  });

  const characterOptions = [
    { value: "wario", label: "Wario" },
    { value: "mario", label: "Mario" },
    { value: "luigi", label: "Luigi" },
    { value: "peach", label: "Peach" },
    { value: "daisy", label: "Daisy" },
  ];

  const roundOptions = [
    { value: "winnersQuarters", label: "Winners Quarters" },
    { value: "winnersSemis", label: "Winners Semis" },
    { value: "winnersFinals", label: "Winners Finals" },
    { value: "losersQuarters", label: "Losers Quarters" },
    { value: "losersSemis", label: "Losers Semis" },
    { value: "losersFinals", label: "Losers Finals" },
    { value: "grandFinals", label: "Grand Finals" },
    { value: "trueFinals", label: "True Finals" },
    { value: "winnersRound", label: "Winners Round" },
    { value: "losersRound", label: "Losers Round" },
  ];

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    fetch("/update-scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scores: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data updated:", data);
      })
      .catch((error) => console.error("Failed to update data:", error));
  };

  const resetData = () => {
    setData({
      player1Score: 0,
      player2Score: 0,
      player1Tag: "",
      player2Tag: "",
      player1Char: "",
      player2Char: "",
      round: "",
      roundNumber: "",
    });
  };

  return (
    <div className="App bg-gradient-to-r from-purple-950 to-cyan-950 min-h-screen flex flex-col items-center py-5 text-gray-200">
      <h1 className="text-4xl font-light m-8">Smash Ultimate Stream Overlay</h1>
      <div className="flex w-full justify-center items-start gap-x-16">
        {["player1", "player2"].map((player) => (
          <Player
            key={player}
            player={player}
            data={data}
            handleInputChange={handleInputChange}
            handleScoreChange={(player, delta) =>
              setData((prev) => ({
                ...prev,
                [player]: Math.max(0, prev[player] + delta),
              }))
            }
            characterOptions={characterOptions}
          />
        ))}
      </div>
      <RoundSelection
        data={data}
        handleInputChange={handleInputChange}
        handleSelectChange={(selectedOption, action) =>
          setData((prev) => ({ ...prev, [action.name]: selectedOption.value }))
        }
        roundOptions={roundOptions}
      />
      <ControlButtons updateData={updateData} resetData={resetData} />
    </div>
  );
}

export default App;

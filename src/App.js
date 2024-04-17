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
    { value: "Banjo & Kazooie", label: "Banjo & Kazooie" },
    { value: "Bayonetta", label: "Bayonetta" },
    { value: "Bowser", label: "Bowser" },
    { value: "Bowser Jr", label: "Bowser Jr." },
    { value: "Byleth", label: "Byleth" },
    { value: "Captain Falcon", label: "Captain Falcon" },
    { value: "Chrom", label: "Chrom" },
    { value: "Cloud", label: "Cloud" },
    { value: "Corrin", label: "Corrin" },
    { value: "Daisy", label: "Daisy" },
    { value: "Dark Pit", label: "Dark Pit" },
    { value: "Dark Samus", label: "Dark Samus" },
    { value: "Diddy Kong", label: "Diddy Kong" },
    { value: "Donkey Kong", label: "Donkey Kong" },
    { value: "Dr Mario", label: "Dr. Mario" },
    { value: "Duck Hunt", label: "Duck Hunt" },
    { value: "Falco", label: "Falco" },
    { value: "Fox", label: "Fox" },
    { value: "Ganondorf", label: "Ganondorf" },
    { value: "Greninja", label: "Greninja" },
    { value: "Hero", label: "Hero" },
    { value: "Ice Climbers", label: "Ice Climbers" },
    { value: "Ike", label: "Ike" },
    { value: "Incineroar", label: "Incineroar" },
    { value: "Inkling", label: "Inkling" },
    { value: "Isabelle", label: "Isabelle" },
    { value: "Jigglypuff", label: "Jigglypuff" },
    { value: "Joker", label: "Joker" },
    { value: "Ken", label: "Ken" },
    { value: "King Dedede", label: "King Dedede" },
    { value: "King K Rool", label: "King K. Rool" },
    { value: "Kirby", label: "Kirby" },
    { value: "Link", label: "Link" },
    { value: "Little Mac", label: "Little Mac" },
    { value: "Lucario", label: "Lucario" },
    { value: "Lucas", label: "Lucas" },
    { value: "Lucina", label: "Lucina" },
    { value: "Luigi", label: "Luigi" },
    { value: "Mario", label: "Mario" },
    { value: "Marth", label: "Marth" },
    { value: "Mega Man", label: "Mega Man" },
    { value: "Meta Knight", label: "Meta Knight" },
    { value: "Mewtwo", label: "Mewtwo" },
    { value: "Mii Brawler", label: "Mii Brawler" },
    { value: "Mii Gunner", label: "Mii Gunner" },
    { value: "Mii Swordfighter", label: "Mii Swordfighter" },
    { value: "Min Min", label: "Min Min" },
    { value: "Mr Game & Watch", label: "Mr. Game & Watch" },
    { value: "Ness", label: "Ness" },
    { value: "Olimar", label: "Olimar" },
    { value: "Pac Man", label: "Pac-Man" },
    { value: "Palutena", label: "Palutena" },
    { value: "Peach", label: "Peach" },
    { value: "Pichu", label: "Pichu" },
    { value: "Pikachu", label: "Pikachu" },
    { value: "Piranha Plant", label: "Piranha Plant" },
    { value: "Pit", label: "Pit" },
    { value: "Pokemon Trainer", label: "Pokemon Trainer" },
    { value: "Pyra", label: "Pyra" },
    { value: "Random", label: "Random" },
    { value: "Richter", label: "Richter" },
    { value: "Ridley", label: "Ridley" },
    { value: "Rob", label: "ROB" },
    { value: "Robin", label: "Robin" },
    { value: "Rosalina & Luma", label: "Rosalina & Luma" },
    { value: "Roy", label: "Roy" },
    { value: "Ryu", label: "Ryu" },
    { value: "Samus", label: "Samus" },
    { value: "Sephiroth", label: "Sephiroth" },
    { value: "Sheik", label: "Sheik" },
    { value: "Shulk", label: "Shulk" },
    { value: "Simon", label: "Simon" },
    { value: "Snake", label: "Snake" },
    { value: "Sonic", label: "Sonic" },
    { value: "Sora", label: "Sora" },
    { value: "Steve", label: "Steve" },
    { value: "Terry", label: "Terry" },
    { value: "Toon Link", label: "Toon Link" },
    { value: "Villager", label: "Villager" },
    { value: "Wario", label: "Wario" },
    { value: "Wii Fit Trainer", label: "Wii Fit Trainer" },
    { value: "Wolf", label: "Wolf" },
    { value: "Yoshi", label: "Yoshi" },
    { value: "Young Link", label: "Young Link" },
    { value: "Zelda", label: "Zelda" },
    { value: "Zero Suit Samus", label: "Zero Suit Samus" },
  ];

  const roundOptions = [
    { value: "winnersRound", label: "Winners Round" },
    { value: "winnersQuarters", label: "Winners Quarters" },
    { value: "winnersSemis", label: "Winners Semis" },
    { value: "winnersFinals", label: "Winners Finals" },
    { value: "losersRound", label: "Losers Round" },
    { value: "losersQuarters", label: "Losers Quarters" },
    { value: "losersSemis", label: "Losers Semis" },
    { value: "losersFinals", label: "Losers Finals" },
    { value: "grandFinals", label: "Grand Finals" },
    { value: "trueFinals", label: "True Finals" },
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
    const resetData = {
      player1Score: 0,
      player2Score: 0,
      player1Tag: "",
      player2Tag: "",
      player1Char: "",
      player2Char: "",
      round: "",
      roundNumber: "",
    };
    setData(resetData);
    fetch("/update-scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scores: resetData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data reset:", data);
      })
      .catch((error) => console.error("Failed to update data:", error));
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
          setData((prev) => ({
            ...prev,
            [action.name]: selectedOption.value,
            roundNumber: "",
          }))
        }
        roundOptions={roundOptions}
      />
      <ControlButtons updateData={updateData} resetData={resetData} />
    </div>
  );
}

export default App;

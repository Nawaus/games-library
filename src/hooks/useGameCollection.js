import { useState } from "react";

export default function useGameCollection(params) {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const addGames = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };

    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGames = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return {
    games,
    addGames,
    removeGames,
  };
}

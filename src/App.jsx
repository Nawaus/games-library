import { useState } from "react";

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    addGames({ title, cover });
    ev.preventDefault();
    setTitle("");
    setCover("");
  };

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

  return (
    <div className="App">
      <h1>Game Library</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Cover:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => {
              setCover(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add to library</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGames(game.id)}>Remove game</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import Game from "./Components/Game";
import NewGameForm from "./Components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGames, removeGames } = useGameCollection();

  return (
    <div className="App">
      <h1>Game Library</h1>
      <NewGameForm addGames={addGames} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              onRemove={() => removeGames(game.id)}
            />
          ))
        ) : (
          <h2 style={{ margin: "4rem auto" }}>Try to add some game!</h2>
        )}
      </div>
    </div>
  );
}

export default App;

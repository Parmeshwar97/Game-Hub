import Card from "../Card";
import useGames from "../Hooks/useGames";
const GameCards = () => {
  const { games, error } = useGames();
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {games.map((game) => (
            <Card key={game.id} game={game}/>
          ))}
        </div>
      )}
    </>
  );
};

export default GameCards;

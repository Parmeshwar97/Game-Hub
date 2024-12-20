import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import useGames from "../Hooks/useGames";
const GameCards = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {isLoading &&
            skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
          {data.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  );
};

export default GameCards;

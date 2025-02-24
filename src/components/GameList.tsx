import Card from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import useGames from "../Hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameCards = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
{console.log(data)}
  if (error)
    return <div className="text-center font-semibold text-xl">{error.message}</div>;

  if (data?.results.length === 0 && !isLoading)
    return <div className="text-center font-semibold text-xl">Page Not Found!</div>;

  return ( 
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-6">
      {isLoading &&
        skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
      {data?.results.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameCards;

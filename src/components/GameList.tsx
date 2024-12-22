import Card from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import useGames, { Platform } from "../Hooks/useGames";
import { Genre } from "../Hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameCards = ({selectedPlatform,selectedGenre}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  console.log(data);
  
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15];
  return (
    <>
      {error && <div>{error}</div>}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-fit gap-6">
        {
          isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)
        }
        {
          data.map((game) => (
            <Card key={game.id} game={game} />))
        }
        </div>
    </>
  );
};

export default GameCards;

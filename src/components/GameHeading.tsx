import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}


const GameHeading = ({ gameQuery }: Props) => {

  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  return (
    <h1 className="font-bold text-5xl my-4">{`${
      gameQuery?.platform?.name || ""
    } ${genre?.name || ""} Games`}</h1>
  );
};

export default GameHeading;

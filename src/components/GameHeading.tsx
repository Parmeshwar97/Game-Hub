import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="font-bold text-5xl my-4">{`${gameQuery?.platform?.name || ""} ${
      gameQuery?.genre?.name || ""
    } Games`}</h1>
  );
};

export default GameHeading;

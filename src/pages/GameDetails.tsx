import { useParams } from "react-router-dom";
import useGameDetails from "../Hooks/useGameDetails";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (isLoading) return <h2>Loading...</h2>;
  if (error) throw error;
  return (
    <div className="px-10">
      <h1 className="text-5xl font-bold">{game?.name}</h1>
      <p>{game?.description_raw}</p>
    </div>
  );
};

export default GameDetails;

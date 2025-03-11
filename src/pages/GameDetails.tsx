import { useParams } from "react-router-dom";
import useGameDetails from "../Hooks/useGameDetails";
import ExpandableText from "../components/ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) throw error;
  return (
    <div className="px-10">
      <h1 className="text-5xl font-bold">{game?.name}</h1>
      <ExpandableText>{game?.description_raw!}</ExpandableText>
    </div>
  );
};

export default GameDetails;

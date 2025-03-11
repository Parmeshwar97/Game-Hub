import { Link } from "react-router-dom";
import { Game } from "../Hooks/useGames";
import getCroppedImage from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import IconsList from "./IconsList";

export interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div
      className="
    dark:bg-[#202020] bg-[hsla(0,0%,67%,1)]  rounded-lg hover:scale-105
     max-h-fit overflow-hidden transition-all"
    >
      <img src={getCroppedImage(game.background_image)} className="w-full" />

      <div className="p-5 flex flex-col gap-y-2">
        <div className="flex items-center mb-2 justify-between">
          <IconsList game={game} />
          <CriticScore score={game.metacritic} />
        </div>

        <Link to={`games/${game.slug}`} className="font-extrabold text-xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Link>
      </div>
    </div>
  );
};
export default GameCard;

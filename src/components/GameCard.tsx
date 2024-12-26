import IconsList from "./IconsList";
import { Game } from "../Hooks/useGames";
import getCroppedImage from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

export interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div
      className="
    bg-[#202020] rounded-lg border-2

    border-neutral-900 max-h-fit overflow-hidden"
    >
      <img src={getCroppedImage(game.background_image)} className="w-full" />

      <div className="p-5 flex flex-col gap-y-2">
        <div className="flex items-center mb-2 justify-between">
          <IconsList game={game} />
          <CriticScore score={game.metacritic} />
        </div>

        <p className="font-extrabold text-xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </p>
      </div>
    </div>
  );
};
export default GameCard;

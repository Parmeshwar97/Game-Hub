import IconsList from "./IconsList";
import { Game } from "../Hooks/useGames";
import getCroppedImage from "../services/image-url";
import CriticScore from "./CriticScore";

export interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-neutral-900 rounded-lg max-h-fit overflow-hidden">
      <img src={getCroppedImage(game.background_image)} className="w-full" />
      <div className="p-5 flex flex-col gap-y-2">
              <p className="font-extrabold text-xl">{game.name}</p>
              <div className="flex items-center justify-between">
                <IconsList game={game} />
        <CriticScore score={game.metacritic}/>  
        </div>
        
      </div>
    </div>
  );
};
export default GameCard;

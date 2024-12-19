import IconsList from "./components/IconsList";
import { Game } from "./Hooks/useGames";
import getCroppedImage from "./services/image-url";

export interface Props {
    game: Game
}
const Card = ({game}:Props) => {
    return (
        <div className="bg-neutral-900 rounded-lg max-h-fit overflow-hidden">
            <img src={getCroppedImage(game.background_image)} className="w-full"/>
            <div className="p-5 flex flex-col gap-y-2">
                <p className="font-extrabold text-xl">{game.name}</p>
                <IconsList game={game}/>
                <p>add</p>
            </div>
        </div>
    )
}
export default Card;


import { Game } from "./Hooks/useGames";

interface Props {
    game: Game
}
const Card = ({game}:Props) => {
    return (
        <div className="bg-neutral-900 rounded-lg overflow-hidden">
            <img src={game.background_image} className="w-full"/>
            <div className="p-2">
                <span>icons</span>
                <p className="font-extrabold text-xl">{game.name}</p>
                <p>add</p>
            </div>
        </div>
    )
}
export default Card;
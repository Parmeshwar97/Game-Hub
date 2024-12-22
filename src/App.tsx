import { useState } from "react";
import GameList from "./components/GameList";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="flex flex-col px-3">
      <NavBar />
      <div className=" grid grid-flow-col">
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
        <div>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameList gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};
export default App;

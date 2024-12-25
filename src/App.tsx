import { useState } from "react";
import GameList from "./components/GameList";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="flex flex-col px-3">
      <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})} />
      <div className="flex">
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
        <div className="w-full">
            <GameHeading gameQuery={gameQuery}/>
          <div className="grid grid-cols-[8rem,9rem] sm:grid-cols-[fit-content(100px)_fit-content(100px)] gap-x-3">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameList gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};
export default App;

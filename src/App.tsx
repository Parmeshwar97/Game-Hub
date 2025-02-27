import { useState } from "react";
import GameList from "./components/GameList";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platforms } from "./services/api-client";


export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sortOrder: string;
  searchText: string;
  isDarkMode: boolean;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ isDarkMode: true } as GameQuery);
  return (
    <div
      className={`flex flex-col px-3 h-full ${gameQuery.isDarkMode && "dark"}`}
    >
      <NavBar
        isDarkMode={gameQuery.isDarkMode}
        onDarkMode={(isDarkMode) => setGameQuery({ ...gameQuery, isDarkMode })}
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <div className="flex mb-3">
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
        <div className="w-full">
          <GameHeading gameQuery={gameQuery} />
          <div className="grid grid-cols-[8rem,9rem] text-white sm:grid-cols-[fit-content(100px)_fit-content(100px)] gap-x-3 py-4 px-1 font-semibold ">
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />

            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
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

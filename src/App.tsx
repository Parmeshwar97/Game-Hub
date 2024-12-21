import { useState } from "react";
import GameList from "./components/GameList";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { Genre } from "./Hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);
  return (
    <div className="flex flex-col px-3">
      <NavBar />
      <div className=" grid grid-flow-col">
        <GenresList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
        <GameList selectedGenre={selectedGenre}/>
      </div>
    </div>
  );
};
export default App;

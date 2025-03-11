import GameHeading from "../components/GameHeading";
import GameList from "../components/GameList";
import GenresList from "../components/GenresList";
import SortSelector from "../components/SortSelector";
import useGameQueryStore from "../store";


const HomePage = () => {
    const { gameQuery } = useGameQueryStore();
  return (
    <div
      className={`flex flex-col px-3 h-full ${gameQuery.isDarkMode && "dark"}`}
    >
      <div className="flex mb-3">
        <GenresList />
        <div className="w-full">
          <GameHeading />
          <div className="grid grid-cols-[8rem,9rem] text-white sm:grid-cols-[fit-content(400px)_fit-content(400px)] gap-x-3 py-4 px-1 font-semibold ">
            <SortSelector />
            {/* 
            <PlatformSelector

            /> */}
          </div>
          <GameList />
        </div>
      </div>
    </div>
  );
}

export default HomePage
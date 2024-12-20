import GameCards from "./components/GameCards";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div className="lg:flex hidden flex-col">
          <GenresList />
        </div>
        <GameCards />
      </div>
    </div>
  );
};
export default App;

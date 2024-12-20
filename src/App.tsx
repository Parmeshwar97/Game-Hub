import GameCards from "./components/GameCards";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="flex flex-col">

      <NavBar />

      <div className=" grid grid-flow-col justify-center">
        <GenresList />
        <GameCards />
      </div>
    </div>
  );
};
export default App;

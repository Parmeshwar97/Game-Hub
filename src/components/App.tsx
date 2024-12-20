import GameCards from "./GameCards";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div className="hidden lg:block">aside</div>
        <GameCards />
      </div>
    </div>
  );
};
export default App;

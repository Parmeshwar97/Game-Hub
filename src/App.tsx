import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {

  let [games, setGames] = useState([]);



  useEffect(() => {
    fetchGames();
  },[]);

  const fetchGames = async () => {
    const jsonData = await fetch(
      "https://api.rawg.io/api/games?key=b64c552882404bbc8d107fd968d50730"
    );
    const data = await jsonData.json();
    setGames(data.results)
  };
console.log(games);

  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="bg-pink-400">aside</div>
      <div className="bg-purple-600">main</div>
    </div>
  );
};
export default App;

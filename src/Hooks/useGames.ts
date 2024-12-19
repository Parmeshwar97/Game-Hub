import { useEffect, useState } from "react";

//add abort Controller later!

export interface Platform {
  id: number;
  name: string;
  slug: string;
  icon: any
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGame {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const jsonData = await fetch(
        "https://api.rawg.io/api/games?key=b64c552882404bbc8d107fd968d50730"
      );
      const data: FetchGame = await jsonData.json();
      setGames(data.results);
    } catch (err: any) {
      setError(err.message);
    }
  };
  return { games, error };
};

export default useGames;

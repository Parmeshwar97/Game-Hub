import { useEffect, useState } from "react";

//add abort Controller later!

export interface Platform {
  id: number;
  name: string;
  slug: string;
  icon: any;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGame {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    try {
      const jsonData = await fetch(
        "https://api.rawg.io/api/games?key=b64c552882404bbc8d107fd968d50730"
      );
      const data: FetchGame = await jsonData.json();
      setGames(data.results);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return { games, error,isLoading };
};

export default useGames;

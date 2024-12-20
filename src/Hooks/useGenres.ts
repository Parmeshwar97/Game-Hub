import { useEffect, useState } from 'react'

interface Genre{
  id: number;
  name: string;
}
interface FetchGame{
  id: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    try {
      const jsonData = await fetch(
        "https://api.rawg.io/api/genres?key=b64c552882404bbc8d107fd968d50730"
      );
      const data: FetchGame = await jsonData.json();
      setGenres(data.results);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return { genres, error,isLoading };}

export default useGenres;
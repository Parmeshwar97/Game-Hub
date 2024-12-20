import { useEffect, useState } from "react";

interface FetchResponse<T> {
  id: number;
  results: T[];
}
const useData =<T> (endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    try {
      const jsonData = await fetch(
        `https://api.rawg.io/api${endpoint}?key=b64c552882404bbc8d107fd968d50730`
      );
      const data: FetchResponse<T> = await jsonData.json();
      setData(data.results);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return { data, error, isLoading };
};

export default useData;

import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } },[selectedGenre?.id]);

export default useGames;

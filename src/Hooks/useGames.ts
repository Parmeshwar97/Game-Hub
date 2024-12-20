import useData from "./useData";

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


const useGames = () => useData<Game>('/games');

export default useGames;

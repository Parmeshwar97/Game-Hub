import { Genre } from "./Genre";
import { Platforms } from "./Platforms";
import { Publishers } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publishers[];
}

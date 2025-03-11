import { Platforms } from "./entities/Platforms";
import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platform?: Platforms | null;
  sortOrder?: string;
  searchText?: string;
  isDarkMode?: boolean;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setDarkMode: (darkMode: boolean) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { isDarkMode: true },
  setDarkMode: (darkMode) =>
    set((store) => {
      return {
        gameQuery: { ...store.gameQuery, isDarkMode: darkMode },
      };
    }),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { searchText, isDarkMode: store.gameQuery.isDarkMode },
    })),
}));

export default useGameQueryStore;

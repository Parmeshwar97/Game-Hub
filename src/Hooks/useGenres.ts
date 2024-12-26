
import genres from '../data/genres';
import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//!for static genres
// const useGenres = () => ({ data: genresy, isLoading: false, error: null });

//!for genres from api
const useGenres = useData<Genre>('/genres');
export default useGenres;

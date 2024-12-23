import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="lg:flex hidden flex-col max-w-fit">
      {isLoading && (
        <div className="flex flex-col gap-5 rounded items-center py-3 w-11/12 animate-pulse bg-zinc-800">
          {skeleton.map((num) => (
            <GenresSkeleton key={num + 1} />
          ))}
        </div>
      )}

      <ul>
        {data.map((genre) => (
          <li key={genre.id} className="flex items-center">
            <img
              src={getCroppedImage(genre.image_background)}
              className="size-8 rounded m-3"
            />
            <button
              style={
                genre.id === selectedGenre?.id ? { fontWeight: "bolder" } : {}
              }
              onClick={() => onSelectGenre(genre)}
              className="hover:underline"
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;

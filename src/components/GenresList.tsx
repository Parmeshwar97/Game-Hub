import useGenres from "../Hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenreId: (genre: number) => void;
  selectedGenreId?: number;
}

const GenresList = ({ onSelectGenreId, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  
  if (error) return null;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="lg:flex hidden flex-col mt-6 w-1/6">
      <h1 className="text-2xl font-bold my-1 mx-3 ">Genres</h1>
        {isLoading && (
          <div className="flex flex-col gap-5 rounded items-center py-3 w-11/12 animate-pulse bg-zinc-800">
            {skeleton.map((num) => (
              <GenresSkeleton key={num + 1} />
            ))}
          </div>
        )}
        
        <ul>
          {data?.results.map((genre) => (
            <li key={genre.id} className="flex items-center">
              <img
                src={getCroppedImage(genre.image_background)}
                className="size-8 rounded-lg m-3 object-cover"
              />
              <button
                style={
                  genre.id === selectedGenreId
                    ? { fontWeight: "bolder", transform: "scale(1.1)" }
                    : {}
                }
                onClick={() => onSelectGenreId(genre.id)}
                className="whitespace-normal text-left mr-1 font-semibold"
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenresList;

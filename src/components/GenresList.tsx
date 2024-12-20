import useGenres from "../Hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <div className="lg:flex hidden flex-col max-w-fit">
      <ul>
        {data.map((genre) => (
          <li className="flex items-center">
            <img
              src={getCroppedImage(genre.image_background)}
              className="size-8 rounded m-3"
            />
            <span>{genre.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;

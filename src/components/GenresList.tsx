import useGenres from "../Hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;

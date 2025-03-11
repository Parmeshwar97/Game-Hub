import useScreenshots from "../Hooks/useScreenshots";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return <h2>Loading...</h2>;
  if (error) throw error;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {data?.results.map((file) => (
        <img key={file.id} src={file.image} />
      ))}
    </div>
  );
};

export default GameScreenshots;

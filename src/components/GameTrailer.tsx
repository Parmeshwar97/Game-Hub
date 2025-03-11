import useTrailers from "../Hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return <h2>Loading...</h2>;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video src={first.data?.[480]} poster={first.preview} controls/>
  ) : null;
};

export default GameTrailer;

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const styles =
    score > 75
      ? { borderColor: "green", color: "green" }
      : { borderColor: "yellow", color: "yellow" };
  if (!score) return null;
  return (
    <span style={styles} className="border-[1px] px-[5px] text-sm rounded">
      {score}
    </span>
  );
};

export default CriticScore;

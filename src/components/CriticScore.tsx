interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <div className={`px-[5px] py-0 text-sm bg-[#373737] rounded ]`}>{score}</div>
  );
};

export default CriticScore;

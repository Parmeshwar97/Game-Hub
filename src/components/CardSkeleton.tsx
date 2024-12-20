
const CardSkeleton = () => {
  return (
    <div className="bg-neutral-900 rounded-lg max-h-fit overflow-hidden">
      <div className="w-60 h-64"></div>
      <div className="p-5 flex flex-col gap-y-2">
        <p className="font-extrabold text-xl"></p>
        <p></p>
      </div>
    </div>
  );
}

export default CardSkeleton
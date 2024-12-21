const CardSkeleton = () => {
  return (
    <div className="w-64 max-w-sm mx-auto">
      <div className="animate-pulse">
        <div className="bg-gray-500 h-48 w-full rounded-t-lg"></div>

        <div className="space-y-2 rounded-b-lg bg-zinc-700 p-4 ">
          <div className="bg-gray-600 w-11/12 h-2 rounded"></div>
          <div className="bg-gray-600 w-10/12 h-2 rounded"></div>
          <div className="bg-gray-600 w-9/12 h-2 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;

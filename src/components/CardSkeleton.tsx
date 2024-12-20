const CardSkeleton = () => {
  return (
    // <div className="bg-neutral-900 rounded-lg max-h-fit overflow-hidden animate-pulse">
    //   <div className="animate-pulse w-60 h-64"></div>
    //   <div className="p-5 flex flex-col gap-y-2">
    //     <p className="font-extrabold text-xl"></p>
    //     <p></p>
    //   </div>
    // </div>
    <div className="w-72 max-w-sm mx-auto">
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

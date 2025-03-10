import Card from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import useGames from "../Hooks/useGames";
import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";

const GameCards = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error)
    return (
      <div className="text-center font-semibold text-xl">{error.message}</div>
    );

  if (data?.pages.length === 0 && !isLoading)
    return (
      <div className="text-center font-semibold text-xl">Page Not Found!</div>
    );

  const fetchedGames = data?.pages.reduce(
    (acc, page) => acc + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      next={fetchNextPage}
      loader={<h4>Loading...</h4>}
      hasMore={!!hasNextPage}
      dataLength={fetchedGames ?? 0}
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-6">
        {isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {data?.pages.map((page, i) => {
          return (
            <React.Fragment key={i}>
              {" "}
              {page.results.map((game) => (
                <Card key={game.id} game={game} />
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default GameCards;

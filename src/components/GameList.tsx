import Card from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import useGames from "../Hooks/useGames";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameCards = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error)
    return (
      <div className="text-center font-semibold text-xl">{error.message}</div>
    );

  if (data?.pages.length === 0 && !isLoading)
    return (
      <div className="text-center font-semibold text-xl">Page Not Found!</div>
    );

  return (
    <>
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
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="bg-blue-600 mt-3 rounded px-2 py-1"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default GameCards;

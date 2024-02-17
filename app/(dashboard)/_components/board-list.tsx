"use client";

import { NewBoardButton } from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
      </div>
    </div>
  );
};

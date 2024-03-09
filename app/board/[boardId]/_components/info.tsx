import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Button asChild variant="board" className="px-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Board Logo" height={40} width={40} />
          <span
            className={cn(
              "font-semibold text-xl ml-2 text-black",
              font.className
            )}
          >
            Board
          </span>
        </Link>
      </Button>
      <TabSeparator />
      <Button
        variant="board"
        className="text-base font-normal px-2"
        onClick={() => {}}
      >
        Title
      </Button>
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};

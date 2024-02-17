"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";

interface NewBoardButtonProps {
  orgId: string;
}

export const NewBoardButton = ({ orgId }: NewBoardButtonProps) => {
  return (
    <button
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-4",
        "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};

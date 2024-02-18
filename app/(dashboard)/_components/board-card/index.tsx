"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  return (
    <Link href={`/board/${id}`}>
      <div>
        <div>
          <Image src={imageUrl} alt={title} fill className="object-fit" />
        </div>
      </div>
    </Link>
  );
};

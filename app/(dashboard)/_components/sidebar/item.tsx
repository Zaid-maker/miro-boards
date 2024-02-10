"use client";

import React from "react";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  return <div>Item</div>;
};

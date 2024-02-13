import { UserButton } from "@clerk/nextjs";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

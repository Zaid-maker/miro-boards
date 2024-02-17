import Image from "next/image";
import React from "react";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Miro Boards</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to Get Started
      </p>
    </div>
  );
};

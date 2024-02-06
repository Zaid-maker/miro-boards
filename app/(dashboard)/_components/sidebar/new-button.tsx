"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square"></div>
      </DialogTrigger>
    </Dialog>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Button
      disabled={isDisabled}
      onClick={onClick}
      size="icon"
      variant={isActive ? "boardActive" : "board"}
    >
      <Icon />
    </Button>
  );
};

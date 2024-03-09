import {
  Circle,
  MousePointer2,
  Pen,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { ToolButton } from "./tool-button";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton label="Select" icon={MousePointer2} onClick={() => {}} />
        <ToolButton label="Text" icon={Type} onClick={() => {}} />
        <ToolButton label="Sticky Note" icon={StickyNote} onClick={() => {}} />
        <ToolButton label="Rectangle" icon={Square} onClick={() => {}} />
        <ToolButton label="Ellipse" icon={Circle} onClick={() => {}} />
        <ToolButton label="Pen" icon={Pen} onClick={() => {}} />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton label="Undo" icon={Undo2} onClick={() => {}} />
        <ToolButton label="Redo" icon={Redo2} onClick={() => {}} />
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};

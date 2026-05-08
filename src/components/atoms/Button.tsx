import React from "react";
import { cn } from "@/src/lib/cn";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(`bg-red-300
     hover:bg-red-400
      text-white font-bold !py-2 px-4 rounded ${className} `)}
    >
      {children}
    </button>
  );
}

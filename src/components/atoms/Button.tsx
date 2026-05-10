import React from "react";
import { cn } from "@/src/lib/cn";
interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'green'|'blue'|'violet'|'warning'|'danger';
}
export default function Button({ children, className }: Props) {
 
 const variants = {
   green: 'bg-green-500',
   blue: 'bg-blue-500',
   violet: 'bg-violet-500',
   warning: 'bg-warning-500',
   danger: 'bg-danger-500',
 }

 
  return (
    <button
      className={cn(`${}
     hover:bg-red-400
      text-white font-bold !py-2 px-4 rounded ${className} `)}
    >
      {children}
    </button>
  );
}

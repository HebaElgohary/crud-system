import React from "react";
import { cn } from "@/src/lib/cn";
interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'green'|'blue'|'violet'|'warning'|'danger';
}

export default function Button({ children, className, variant='green' }: Props) {
 
 const variants = {
   green: 'ds-bg-green',
   blue: 'ds-bg-blue',
   violet: 'ds-bg-violet',
   warning: 'ds-bg-warning',
   danger: 'ds-bg-danger',
 }

 
  return (
    <button
      className={cn(variants[variant],
    ' hover:bg-red-400  text-white font-bold !py-2 !px-4 rounded ',className)}
    >
      {children}
    </button>
  );
}

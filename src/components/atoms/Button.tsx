import React from "react";
import { cn } from "@/src/lib/cn";
interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: 'green'|'blue'|'violet'|'warning'|'danger';
  size?: 'md' | 'lg'| 'xl'|'sm';
  fill?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export default function Button({onClick, children,size='md', className,type='button', variant='green',fill=false}: Props) {
 const variants = {
   green: 'ds-bg-green',
   blue: 'ds-bg-blue',
   violet: 'ds-bg-violet',
   warning: 'ds-bg-warning',
   danger: 'ds-bg-danger',
 }
const sizes = {
  sm: '!px-6 !py-2',
  md: '!px-8 !py-4',
  lg: '!px-10 !py-5 ',
  xl: '!px-12 !py-6',
}
 
  return (
    <button type={type} onClick={onClick}
      className={cn(variants[variant] ,sizes[size],
    ` bg-red-500 ${fill? 'w-full' : 'w-fit'} text-white  font-bold  rounded `,className)}
    >
    {children}
    </button>
  );
}

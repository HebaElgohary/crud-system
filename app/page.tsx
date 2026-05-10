"use client";
import { useEffect, useRef } from "react";
import { fade } from "@/src/animations/fade";
import MainLyout from "@/src/components/templates/MainLyout";
import MainCard from "@/src/components/molecules/MainCard";
import { User } from "../src/assets/icons/icons";
import Button from "@/src/components/atoms/Button";
export default function Home() {
  const boxRef = useRef(null);
  useEffect(() => {
    if (boxRef.current) {
      fade(boxRef.current);
    }
  }, []);
  return (
    <MainLyout>
      <div>
   <MainCard
  Icon={User}
  title="User"
  subtitle="Subtitle"
  btn='Button'
  
  

  titleProps={{
    variant: 'black',
    size: 'xl'
  }}
   subtitleProps={{
    variant: 'black',
    size: 'sm'
  }}

  btnProps={{
    variant: 'green',
    
    // className: '!bg-red-400',
  }}
/>

      </div>
    </MainLyout>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { fade } from "@/src/animations/fade";
import Button from "@/src/components/atoms/Button";
export default function Home() {
  const boxRef = useRef(null);
  useEffect(() => {
    if (boxRef.current) {
      fade(boxRef.current);
    }
  }, []);
  return (
    <div   ref={boxRef}
      className="!w-full min-h-screen p-10 bg-black text-white rounded-xl flex items-center justify-center" >
      home page
      <Button className="ml-4 bg-green-300">button</Button>
    </div>
  );
}

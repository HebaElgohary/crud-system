"use client";
import { useEffect, useRef } from "react";
import { fade } from "@/src/animations/fade";
import MainLyout from "@/src/components/templates/MainLyout";
import MainCard from "@/src/components/molecules/MainCard";
import { User } from "../src/assets/icons/icons";
import Button from "@/src/components/atoms/Button";
import MainCards from "@/src/components/molecules/MainCards";
import PageHeading from "@/src/components/molecules/PageHeading";
export default function Home() {
  const boxRef = useRef(null);
  useEffect(() => {
    if (boxRef.current) {
      fade(boxRef.current);
    }
  }, []);
  return (
    <MainLyout>
      <PageHeading title="Users" subtitle="Mange your users" />
      <MainCards />
    </MainLyout>
  );
}

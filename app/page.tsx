"use client";
import { useEffect, useRef } from "react";
import { fade } from "@/src/animations/fade";
import MainLyout from "@/src/components/templates/MainLyout";
import MainCards from "@/src/components/molecules/MainCards";
import PageHeading from "@/src/components/molecules/PageHeading";
import TextInput from "@/src/components/molecules/TextInput";
import UpdateForm from "@/src/components/molecules/form/UpdateForm";
import PasswordInput from "@/src/components/molecules/PasswordInput";
import CreateForm from "@/src/components/molecules/form/CreateForm";
import UsersTable from "@/src/modules/Users/components/UsersTable";
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
      <UsersTable />
      <UpdateForm />
      <CreateForm />
      <PasswordInput placeholder="enter your password" name="password" label="Password" />
    </MainLyout>
  );
}

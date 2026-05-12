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
import UserDetailsCard from "@/src/components/molecules/UserDetailsCard";
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
<div className="!px-11 !my-3 ">
      <MainCards />

      <div className="flex gap-3 lg:flex-row flex-col justify-around w-full">
      <div>
      <UsersTable />
      <CreateForm />
      </div>

     <div className="flex flex-col gap-5 w-full lg:w-1/4 ">
      <UserDetailsCard data={{id:1,name:"name",email:"email"}} />
     <UpdateForm />
    </div>
     </div>
     </div>
    </MainLyout>
  );
}

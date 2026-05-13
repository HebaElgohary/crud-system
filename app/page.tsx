"use client";
import { useEffect, useRef, useState } from "react";
import { fade } from "@/src/animations/fade";
import MainLyout from "@/src/components/templates/MainLyout";
import MainCards from "@/src/components/molecules/MainCards";
import PageHeading from "@/src/components/molecules/PageHeading";
import UsersTable from "@/src/modules/Users/components/UsersTable";
import UserDetailsCard from "@/src/components/molecules/UserDetailsCard";
import CreateUserForm from "@/src/modules/Users/components/CreateUserForm";
import UpdateUserForm from "@/src/modules/Users/components/UpdateUserForm";
export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

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
      <UsersTable setSelectedUserId={setSelectedUserId} />
      <CreateUserForm />
      </div>

     <div className="flex flex-col gap-5 w-full lg:w-1/4 ">
      <UserDetailsCard data={{id:1,name:"name",email:"email"}} />
     {selectedUserId && <UpdateUserForm id={selectedUserId }/>}
    </div>
     </div>
     </div>
    </MainLyout>
  );
}

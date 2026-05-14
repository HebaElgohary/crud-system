"use client";
import { useState } from "react";
import MainLyout from   "@/src/components/templates/MainLyout";
import MainCards from   "@/src/components/molecules/MainCards";
import PageHeading from "@/src/components/molecules/PageHeading";
import UsersTable from  "@/src/modules/Users/components/UsersTable";
import UserDetailsCard from "@/src/modules/Users/components/UserDetailsCard";
import CreateUserForm from "@/src/modules/Users/components/CreateUserForm";
import UpdateUserForm from "@/src/modules/Users/components/UpdateUserForm";

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
const [viewId,setViewId]=useState<number|null>(null)

  return (
    <MainLyout>
      <PageHeading title="Users" subtitle="Mange your users" />
<div className="md:!px-11 md:!my-3 justify-center !mx-3 flex flex-col items-center">
      <MainCards />

      <div className="flex gap-3 lg:flex-row flex-col justify-around w-full">
      <div>
      <UsersTable setSelectedUserId={setSelectedUserId} setViewId={setViewId} />
      <CreateUserForm />
      </div>

     <div className="flex flex-col gap-3 w-full lg:w-1/4 ">
     {viewId && <UserDetailsCard id={viewId} />}
     {selectedUserId && <UpdateUserForm id={selectedUserId }/>}
    </div>
     </div>
     </div>
    </MainLyout>
  );
}

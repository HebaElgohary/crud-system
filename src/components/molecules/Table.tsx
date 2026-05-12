"use client";
import { tableHeading } from "../../data/table";
import { Edit, Trash, Users } from "../../assets/icons/icons";
import FormHeading from "./form/FormHeading";
import { useGetUsers } from "@/src/modules/Users/hooks/useGetUsers";
import { user } from "../../modules/Users/types/types";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
export default function Table({ data: users }: { data?: user[] }) {
  return (
    <div className="flex flex-col gap-5 w-full lg:w-2/3 !p-5 border ds-border-disabled rounded-xl ds-bg-white">
      <FormHeading
        label="All Users"
        icon={Users}
        iconColor="blue"
        titleVariant="blue"
      />

      <div className="overflow-scroll rounded-md  ds-border-disabled">
        <table className="w-full text-sm text-left ds-text-white ">
          <thead className="text-lg font-bold text-center">
            <tr>
              {tableHeading.map((heading) => (
                <th
                  key={heading.key}
                  scope="col"
                  className="!px-6 !py-3 ds-bg-main ds-text-black "
                >
                  {heading.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center !ds-bg-main ds-text-black ">
            {users &&
              users.map((user: user) => (
                <tr
                  key={user.id}
                  className= " text-center " 
                >
                  {" "}
                  <td className=" ">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="flex flex-col lg:flex-row !p-3 justify-center  ">
                    <Button
                      variant="blue"
                      size="sm"
                      fill

                      className="!mt-1 !mx-3 rounded-md"
                    >
                      View
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      fill
                      className="!mt-1 !mx-3 rounded-md"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      fill

                      className="!mt-1 !mx-3 rounded-md"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

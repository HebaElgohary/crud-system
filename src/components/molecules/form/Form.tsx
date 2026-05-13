'use client'
import React, { ComponentType } from "react";
import FormHeading from "./FormHeading";
import { getFormFields } from "@/src/lib/getFormFields";
import FormField from "./FormField";
import { formNameType } from "@/src/types/types";
import Button from "../../atoms/Button";
import { user } from "@/src/modules/Users/types/types";

type onSubmitType<T> = (formData: T) => void;
interface FormProps<T> {
  layout?: "cols" | "rows";
  label: string;
  icon: ComponentType<{ size: number; className: string }>;
  formName: formNameType;
  btn: string;
  onSubmit?: onSubmitType<T>;
  userId?: number;
  userData?: user;
}

export default function Form<T>({
  label,
  userId,
  userData,
  icon,
  formName,
  btn,
  layout = "rows",
  onSubmit,
}: FormProps<T>) {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handelSubmit");
    console.log('user data iss',userData)
    console.log(onSubmit)
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data  = Object.fromEntries(
      formData.entries()  
    ) as T;
    onSubmit?.(data);
  };
  return (
    <div className="border border-gray-300 ds-bg-violet-200 !p-5 rounded-xl !my-5 ">
      <FormHeading label={label} icon={icon} />

      <form
        onSubmit={handelSubmit}
        ref={formRef}
        className={
          layout === "cols"
            ? "flex flex-col gap-5 mt-5  "
            : "flex flex-col lg:flex-row gap-5 mt-5 items-stretch  lg:items-end "
        }
      >
        {getFormFields(formName).map((field:{id:number,label:string,type:string,name:string,placeholder:string}) => (
          <FormField  defaultValue={userData?.[field.name]} key={field.id} {...field} />
        ))}
        <div>
          <Button
            type="submit"
            variant="violet"
            size="sm"
            className="!mt-1 !mx-3"
          >
            {btn}
          </Button>
        </div>
      </form>
    </div>
  );
}

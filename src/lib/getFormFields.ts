import { formNameType } from "../types/types";
type getFormFieldsType = (formName: formNameType) => any[];
export type updateType = {
  id: number;
  label: string;
  type: string;
  name: string;
  placeholder: string;};
export const getFormFields: getFormFieldsType = (formName) => {
  const updateFields:updateType[] = [
    {
      id: 1,
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter name",
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
    },
  ];
  const createFields:updateType[] = [
    {
      id: 1,
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter name",

    },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter Email",

    },
    {
      id: 3,
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
    },
  ];

  switch (formName) {
    case "update":
      return updateFields;
    case "create":
      return createFields;
  }
};

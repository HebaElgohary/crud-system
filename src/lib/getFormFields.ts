type getFormFieldsType = (formName: "update" | "create") => any[];
export const getFormFields: getFormFieldsType = (formName) => {
  const updateFields = [
    {
      id: 1,
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "email",
    },
  ];
  const createFields = [
    {
      id: 1,
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      id: 3,
      label: "Password",
      type: "password",
      name: "password",
    },
  ];

  switch (formName) {
    case "update":
      return updateFields;
    case "create":
      return createFields;
  }
};

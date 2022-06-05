import { IDropDown } from "../types/role";

import uuid from "uuid-random";

export const USER_TYPE: Array<IDropDown> = [
  {
    value: "user",
    label: "User",
  },
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "supervisor",
    label: "Supervisor",
  },
  {
    value: "asdf",
    label: "fdas",
  },
];

export const DEFAULT_PLACEHOLDER_FIELD = {
  id: uuid(),
  email: "",
  role: {
    label: "",
    value: "",
  },
};

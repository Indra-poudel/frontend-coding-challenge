import { IDropDown } from "./role";

export interface IUser {
  id: string;
  email: string;
  role: IDropDown;
}

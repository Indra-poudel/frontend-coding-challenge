import { IDropDown } from "./role";

export interface IUser {
  id: number;
  email: string;
  role: IDropDown;
}

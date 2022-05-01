import { IRole } from "./role";

export interface IUser {
  id: number;
  email: string;
  role: IRole;
}

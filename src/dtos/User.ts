import { IBase } from "./Base";

export interface IUserRequest {
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface IUser extends IBase, IUserRequest {
    status:boolean;
}

export interface IUpdateUser {
    email: string;
    status: boolean;
}

export interface IUserCostum extends IBase {
    status: boolean;
    username: string;
    email: string;
    role: string;
  }
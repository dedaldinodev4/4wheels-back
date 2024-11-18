import { IUser } from "./User";

export interface ISignInRequest {
    data: string;
    password: string;
}

export interface IAuthRequest {
    id: string;
    username: string;
    email: string;
    status: boolean;
}

export interface ICurrentUser {
    token: string;
    user: IAuthRequest;
}

export interface IUpdateCredentialsRequest {
    username: string;
    password: string;
}
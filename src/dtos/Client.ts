import { IBase } from "./Base";


export interface IClient extends IBase, IClientRequest {
    status: boolean;
}

export interface IClientRequest {
    name: string;
    identity: string;
    address: string;
    gender: string;
    walletNumber: string;
    id_user: string;
}

export interface IUpdateClientRequest {
    name: string;
    identity: string;
    address: string;
    gender: string; 
    walletNumber: string;
}
import { IBase } from "./Base";


export interface IPhone extends IBase, IPhoneRequest { }

export interface IPhoneRequest {
    number: string;
    id_user: string;
}
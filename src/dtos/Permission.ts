import { IBase } from "./Base";


export interface IPermission extends IBase, IPermissionRequest { 
    allowed: boolean
}

export interface IPermissionRequest {
    role: string;
    feature: string | null;
}
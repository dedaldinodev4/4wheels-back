import { IBase } from "./Base";

export interface IPaymentType extends IBase, IPaymentTypeRequest {
    status: boolean;
}

export interface IPaymentTypeRequest {
    name: string;
}

export interface IUpdatePaymentTypeRequest {
    name: string;
    status: boolean;
}
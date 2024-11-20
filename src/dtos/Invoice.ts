import type { Status } from "@prisma/client";
import { IBase } from "./Base";

export interface IInvoice extends IBase, IInvoiceRequest { 
    status: Status;
}

export interface IInvoiceRequest {
    id_payment: string;
    number: string | null;
    type: string | null;
    year: string | null;
}

export interface IUpdateInvoiceRequest {
    status: Status;
    type: string | null;
}


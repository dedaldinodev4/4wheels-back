import { IBase } from "./Base";
import { Status } from "@prisma/client";

export interface ISale extends IBase, ISaleRequest {
    status: Status;
}

export interface ISaleRequest {
    id_invoice: string;
    id_client: string;
    id_vehicle: string;
    delivery_date: Date;
    saler_id: string;
}


export interface IUpdateSaleRequest {
    delivery_date: Date;
    status: Status;
}


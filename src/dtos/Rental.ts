import Decimal from "decimal.js";
import { IBase } from "./Base";
import type { Status } from "@prisma/client";

export interface IRental extends IBase, IRentalRequest { 
    status: Status;
}

export interface IRentalRequest {
    start_date: Date;
    end_date: Date;
    initial_mileage: number;
    final_mileage: number;
    total_price: Decimal;
    insurance_type: string | null;//'basic' | 'full';
    id_invoice: string;
    id_client: string;
    id_vehicle: string;
    id_driver: string | null;
}

export interface IUpdateRentalRequest {
    start_date: Date;
    end_date: Date;
    initial_mileage: number;
    final_mileage: number;
    insurance_type: string | null; //'basic' | 'full';
}

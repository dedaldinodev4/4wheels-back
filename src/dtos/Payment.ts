import type { Status } from "@prisma/client";
import { IBase } from "./Base";
import Decimal from "decimal.js";

export interface IPayment extends IBase, IPaymentRequest { 
    status: Status; //'paid' | 'pending' | 'canceled'
}

export interface IPaymentRequest {
    amount: Decimal;
    currency: string;
    id_paymentType: string;
}


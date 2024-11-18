import type { Status } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface IUpdatePaymentRequest {
  amount: Decimal;
  currency: string;
  id_paymentType: string;
}



export interface IUpdatePayment extends IUpdatePaymentRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
}
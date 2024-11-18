import { Decimal } from "@prisma/client/runtime/library";
import { Status } from "@prisma/client";

export interface ICreatePayment extends ICreatePaymentRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
}

export interface ICreatePaymentRequest {
  amount: Decimal;
  currency: string;
  id_paymentType: string;
}
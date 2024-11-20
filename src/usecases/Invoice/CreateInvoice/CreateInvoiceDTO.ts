import { Status } from "@prisma/client";

export interface ICreateInvoice extends ICreateInvoiceRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
}

export interface ICreateInvoiceRequest {
  id_payment: string;
  number: string | null;
  type: string | null;
  year: string | null;
}
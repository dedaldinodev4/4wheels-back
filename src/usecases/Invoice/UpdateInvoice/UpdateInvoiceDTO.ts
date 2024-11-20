import type { Status } from "@prisma/client";
import type Decimal from "decimal.js";

export interface IUpdateInvoiceRequest {
  status: Status;
  type: string | null;
}



export interface IUpdateInvoice extends IUpdateInvoiceRequest {
  id: string;
  id_payment: string;
  number: string | null;
  year: string | null;
  created_at: Date;
  updated_at: Date;
}
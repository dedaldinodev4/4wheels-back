import type { Status } from "@prisma/client";


export interface IInvoice {
  id: string;
  id_payment: string;
  number: string | null;
  type: string | null;
  year: string | null;
  status: Status;
  created_at: Date;
  updated_at: Date;
}

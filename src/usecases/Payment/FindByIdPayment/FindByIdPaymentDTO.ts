import type { Status } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface IPayment {
  id: string;
  amount: Decimal;
  currency: string;
  id_paymentType: string;
  status: Status;
  created_at: Date;
  updated_at: Date;
}

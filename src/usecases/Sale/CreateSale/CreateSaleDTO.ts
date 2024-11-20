import { Decimal } from "@prisma/client/runtime/library";
import { Status } from "@prisma/client";

export interface ICreateSale extends ICreateSaleRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
}

export interface ICreateSaleRequest {
  id_invoice: string;
  id_client: string;
  id_vehicle: string;
  delivery_date: Date;
  saler_id: string;
}
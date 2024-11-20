import type { Status } from "@prisma/client";

export interface IUpdateSaleRequest {
  delivery_date: Date;
  status: Status;
}



export interface IUpdateSale extends IUpdateSaleRequest {
  id: string;
  id_invoice: string;
  id_client: string;
  id_vehicle: string;
  delivery_date: Date;
  saler_id: string;
  created_at: Date;
  updated_at: Date;
}
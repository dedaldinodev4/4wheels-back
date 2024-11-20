import type { Status } from "@prisma/client";

export interface ISale {
  id: string;
  id_invoice: string;
  id_client: string;
  id_vehicle: string;
  delivery_date: Date;
  saler_id: string;
  status: Status;
  created_at: Date;
  updated_at: Date;
}

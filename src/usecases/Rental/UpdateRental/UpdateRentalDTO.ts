import type { Status } from "@prisma/client";
import type Decimal from "decimal.js";

export interface IUpdateRentalRequest {
  start_date: Date;
  end_date: Date;
  initial_mileage: number;
  final_mileage: number;
  insurance_type: string | null; //'basic' | 'full';
}



export interface IUpdateRental extends IUpdateRentalRequest {
  id: string;
  id_invoice: string;
  id_client: string;
  id_vehicle: string;
  id_driver: string | null;
  total_price: Decimal;
  status: Status;
  created_at: Date;
  updated_at: Date;
}
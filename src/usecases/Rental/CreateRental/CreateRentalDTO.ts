import { Status } from "@prisma/client";
import Decimal from "decimal.js";

export interface ICreateRental extends ICreateRentalRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
}

export interface ICreateRentalRequest {
  start_date: Date;
  end_date: Date;
  initial_mileage: number;
  final_mileage: number;
  total_price: Decimal;
  insurance_type: string | null;//'basic' | 'full';
  id_invoice: string;
  id_client: string;
  id_vehicle: string;
  id_driver: string | null;
}
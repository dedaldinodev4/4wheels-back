import Decimal from "decimal.js";

export interface ICreateVehicleImage extends ICreateVehicleImageRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateVehicleImageRequest {
  title: string;
  path: string;
}
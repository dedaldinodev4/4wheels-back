import Decimal from "decimal.js";

export interface ICreateVehicleDetail extends ICreateVehicleDetailRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateVehicleDetailRequest {
  brand: string;
  model: string;
  license_plate: string;
  color: string;
  description: string | null;
  fuelType: string;
  cylinders: number;
  typeOfclass: string;
}
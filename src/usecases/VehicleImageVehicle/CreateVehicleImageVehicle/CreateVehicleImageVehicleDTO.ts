import Decimal from "decimal.js";

export interface ICreateVehicleImageVehicle extends ICreateVehicleImageVehicleRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateVehicleImageVehicleRequest {
  id_vehicle: string;
  id_vehicleImage: string;
}
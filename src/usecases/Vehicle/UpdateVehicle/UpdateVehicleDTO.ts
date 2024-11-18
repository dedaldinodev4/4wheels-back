import Decimal from "decimal.js";

export interface IUpdateVehicleRequest {
  acquisition_date: Date;
  id_vehicleDetail: string;
  mileage: number;
  price: Decimal;
  condition: string; //'new' | 'used' | 'bad';
  type: string; //'sale' | 'rent'
  availability: boolean;
  year: number;
  manufacturer: string;
  created_by: string;
}



export interface IUpdateVehicle extends IUpdateVehicleRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}
import Decimal from "decimal.js";

export interface IVehicle {
  id: string;
  created_at: Date;
  updated_at: Date;
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
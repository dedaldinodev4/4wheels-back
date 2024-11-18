

export interface IUpdateVehicleDetailRequest {
  brand: string;
  model: string;
  license_plate: string;
  color: string;
  description: string | null;
  fuelType: string;
  cylinders: number;
  typeOfclass: string;
}



export interface IUpdateVehicleDetail extends IUpdateVehicleDetailRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}
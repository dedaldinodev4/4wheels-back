
export interface IVehicleDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
  brand: string;
  model: string;
  license_plate: string;
  color: string;
  description: string | null;
  fuelType: string;
  cylinders: number;
  typeOfclass: string;
}

export interface IVehicleDetail {
  id: string;
  brand: string;
  model: string;
  license_plate: string;
  color: string;
  description: string | null;
  fuelType: string;
  cylinders: number;
  typeOfclass: string;
  updated_at: Date;
}


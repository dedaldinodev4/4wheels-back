

export interface IUpdateVehicleImageVehicleRequest {
  id_vehicle: string;
  id_vehicleImage: string;
}



export interface IUpdateVehicleImageVehicle extends IUpdateVehicleImageVehicleRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}


export interface IUpdateVehicleImageRequest {
  title: string;
  path: string;
}



export interface IUpdateVehicleImage extends IUpdateVehicleImageRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}
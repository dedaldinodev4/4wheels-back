import { IBase } from "./Base";

export interface IVehicleImageVehicle extends IBase, IVehicleImageVehicleRequest { }

export interface IVehicleImageVehicleRequest {
    id_vehicle: string;
    id_vehicleImage: string;
}

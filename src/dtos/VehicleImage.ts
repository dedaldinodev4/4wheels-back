import { IBase } from "./Base";

export interface IVehicleImage extends IBase, IVehicleImageRequest { }

export interface IVehicleImageRequest {
    title: string;
    path: string;
}

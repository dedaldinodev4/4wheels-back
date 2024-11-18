import { IBase } from "./Base";

export interface IVehicleDetail extends IBase, IVehicleDetailRequest { }

export interface IVehicleDetailRequest {
    brand: string;
    model: string;
    license_plate: string;
    color: string;
    description: string | null;
    fuelType: string;
    cylinders: number;
    typeOfclass: string;
}

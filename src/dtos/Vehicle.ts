import { IBase } from "./Base";
import Decimal from "decimal.js";

export interface IVehicle extends IBase, IVehicleRequest { }

export interface IVehicleRequest {
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


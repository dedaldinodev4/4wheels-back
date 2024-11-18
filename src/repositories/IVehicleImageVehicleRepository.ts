import { IVehicleImageVehicle, IVehicleImageVehicleRequest } from "../dtos/VehicleImageVehicle";
import { IResultPaginated } from "../dtos/Pagination";

export interface IVehicleImageVehicleRepository {
  create(data: IVehicleImageVehicleRequest):Promise<IVehicleImageVehicle | Error>;
  update(id: string, data: IVehicleImageVehicleRequest): Promise<IVehicleImageVehicle| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findByVehicle(id_vehicle: string, page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IVehicleImageVehicle | null>;
  delete(id: string): Promise<void>;
}
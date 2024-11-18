import { IVehicle, IVehicleRequest } from "../dtos/Vehicle";
import { IResultPaginated } from "../dtos/Pagination";

export interface IVehicleRepository {
  create(data: IVehicleRequest):Promise<IVehicle | Error>;
  update(id: string, data: IVehicleRequest): Promise<IVehicle| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IVehicle | null>;
  delete(id: string): Promise<void>;
}
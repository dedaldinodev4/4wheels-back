import { IVehicleImage, IVehicleImageRequest } from "../dtos/VehicleImage";
import { IResultPaginated } from "../dtos/Pagination";

export interface IVehicleImageRepository {
  create(data: IVehicleImageRequest):Promise<IVehicleImage | Error>;
  update(id: string, data: IVehicleImageRequest): Promise<IVehicleImage| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IVehicleImage | null>;
  delete(id: string): Promise<void>;
}
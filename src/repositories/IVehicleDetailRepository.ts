import { IVehicleDetailRequest, IVehicleDetail} from "../dtos/VehicleDetail";
import { IResultPaginated } from "../dtos/Pagination";

export interface IVehicleDetailRepository {
  create(data: IVehicleDetailRequest):Promise<IVehicleDetail | Error>;
  update(id: string, data: IVehicleDetailRequest): Promise<IVehicleDetail | Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IVehicleDetail | null>;
  delete(id: string): Promise<void>;
}
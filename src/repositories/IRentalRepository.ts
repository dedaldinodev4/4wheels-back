import { IRental, IRentalRequest, IUpdateRentalRequest } from "../dtos/Rental";
import { IResultPaginated } from "../dtos/Pagination";

export interface IRentalRepository {
  create(data: IRentalRequest):Promise<IRental | Error>;
  update(id: string, data: IUpdateRentalRequest): Promise<IRental| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IRental | null>;
  findByStatus(status: string, page: number, perPage: number):Promise<IResultPaginated>;
  delete(id: string, user: string): Promise<void>;
}
import { ISale, ISaleRequest, IUpdateSaleRequest } from "../dtos/Sale";
import { IResultPaginated } from "../dtos/Pagination";

export interface ISaleRepository {
  create(data: ISaleRequest):Promise<ISale | Error>;
  update(id: string, data: IUpdateSaleRequest): Promise<ISale| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<ISale | null>;
  findBySaler(saler_id: string, page: number, perPage: number): Promise<IResultPaginated>;
  findByStatus(status: string, page: number, perPage: number): Promise<IResultPaginated>;
  delete(id: string, user: string): Promise<void>;
}
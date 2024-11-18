import { IPhone, IPhoneRequest } from "../dtos/Phone";
import { IResultPaginated } from "../dtos/Pagination";

export interface IPhoneRepository {
  create(data: IPhoneRequest):Promise<IPhone | Error>;
  update(id: string, data: IPhoneRequest): Promise<IPhone| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IPhone | null>;
  delete(id: string, user: string): Promise<void>;
}
import { IDriver, IDriverRequest } from "../dtos/Driver";
import { IResultPaginated } from "../dtos/Pagination";

export interface IDriverRepository {
  create(data: IDriverRequest):Promise<IDriver | Error>;
  update(id: string, data: IDriverRequest): Promise<IDriver| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IDriver | null>;
  findByIdentity(identity: string): Promise<IDriver | null>;
  delete(id: string, user: string): Promise<void>;
}
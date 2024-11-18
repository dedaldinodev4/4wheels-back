import { IClient, IClientRequest, IUpdateClientRequest } from "../dtos/Client";
import { IResultPaginated } from "../dtos/Pagination";

export interface IClientRepository {
  create(data: IClientRequest):Promise<IClient | Error>;
  update(id: string, data: IUpdateClientRequest): Promise<IClient| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IClient | null>;
  findByIdentity(identity: string): Promise<IClient | null>;
  delete(id: string, user: string): Promise<void>;
}
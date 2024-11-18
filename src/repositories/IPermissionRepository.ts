import { IPermission, IPermissionRequest } from "../dtos/Permission";
import { IResultPaginated } from "../dtos/Pagination";

export interface IPermissionRepository {
  create(data: IPermissionRequest):Promise<IPermission | Error>;
  update(id: string, data: IPermissionRequest): Promise<IPermission| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IPermission | null>;
  delete(id: string): Promise<void>;
}
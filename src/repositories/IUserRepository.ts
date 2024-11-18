import { IUpdateUser, IUserCostum, IUserRequest } from "../dtos/User";
import { IResultPaginated } from "../dtos/Pagination";

export interface IUserRepository {
  create(data: IUserRequest):Promise<IUserCostum | Error>;
  update(id: string, data: IUpdateUser): Promise<IUserCostum | Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IUserCostum | null>;
  findByEmail(email: string): Promise<IUserCostum | null>;
  delete(id: string, user: string): Promise<void>;
}
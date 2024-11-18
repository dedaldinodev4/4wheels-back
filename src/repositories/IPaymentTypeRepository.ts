import { IPaymentType, IPaymentTypeRequest, IUpdatePaymentTypeRequest } from "../dtos/PaymentType";
import { IResultPaginated } from "../dtos/Pagination";

export interface IPaymentTypeRepository {
  create(data: IPaymentTypeRequest):Promise<IPaymentType | Error>;
  update(id: string, data: IUpdatePaymentTypeRequest): Promise<IPaymentType| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IPaymentType | null>;
  delete(id: string, user: string): Promise<void>;
}
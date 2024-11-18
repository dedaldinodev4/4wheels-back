import { IPayment, IPaymentRequest } from "../dtos/Payment";
import { IResultPaginated } from "../dtos/Pagination";

export interface IPaymentRepository {
  create(data: IPaymentRequest):Promise<IPayment | Error>;
  update(id: string, data: IPaymentRequest): Promise<IPayment| Error>;
  pay(id: string): Promise<IPayment| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IPayment | null>;
  findByStatus(status: string, page: number, perPage: number): Promise<IResultPaginated>;
  delete(id: string, user: string): Promise<void>;
}
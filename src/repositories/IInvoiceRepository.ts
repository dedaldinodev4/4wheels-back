import { IInvoice, IInvoiceRequest, IUpdateInvoiceRequest } from "../dtos/Invoice";
import { IResultPaginated } from "../dtos/Pagination";

export interface IInvoiceRepository {
  create(data: IInvoiceRequest):Promise<IInvoice | Error>;
  update(id: string, data: IUpdateInvoiceRequest): Promise<IInvoice| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IInvoice | null>;
  findByStatus(status: string, page: number, perPage: number):Promise<IResultPaginated>;
  delete(id: string, user: string): Promise<void>;
}
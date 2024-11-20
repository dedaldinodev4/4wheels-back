import { prisma } from "../../../lib/prisma";
import { IInvoiceRequest, IInvoice, type IUpdateInvoiceRequest } from "../../../dtos/Invoice";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IInvoiceRepository } from "../../IInvoiceRepository";
import { Status } from "@prisma/client";



export class PrismaInvoiceRepository implements IInvoiceRepository {
  private repository = prisma.invoice;

  async findById(id: string): Promise<IInvoice | null> {
    const invoice = await this.repository.findFirst(
      {
        where: { id }
      });

    return invoice ?? null;
  }

  async findByStatus(status: string, page: number, perPage: number): Promise<IResultPaginated> {
    const invoices = await this.repository.findMany(
      {
        where: { status: status === 'pending' ? Status.PENDING : 
          status === 'done' ? Status.DONE : Status.CANCELED 
        },
        orderBy: { created_at: "asc" }
      });

      const result = await resultPaginated(invoices, page, perPage)
      return result;
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const invoices = await this.repository.findMany({
      orderBy: { number: "asc" },
    });

    const result = await resultPaginated(invoices, page, perPage)
    return result;
  }


  async create(data: IInvoiceRequest): Promise<IInvoice> {
    const createinvoice = await this.repository.create({
      data
    })
    return createinvoice;
  }

  async update(id: string, data: IUpdateInvoiceRequest): Promise<IInvoice> {

    const invoiceUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return invoiceUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const invoiceDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
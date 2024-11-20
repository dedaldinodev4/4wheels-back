import { prisma } from "../../../lib/prisma";
import { ISaleRequest, ISale, type IUpdateSaleRequest } from "../../../dtos/Sale";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { ISaleRepository } from "../../ISaleRepository";
import { Status } from "@prisma/client";



export class PrismaSaleRepository implements ISaleRepository {
 
  private repository = prisma.sale;

  async findById(id: string): Promise<ISale | null> {
    const sale = await this.repository.findFirst(
      {
        where: { id }
      });

    return sale ?? null;
  }

  async findBySaler(saler_id: string, page: number, perPage: number): Promise<IResultPaginated> {
    const sales = await this.repository.findMany(
      {
        where: { saler_id },
        orderBy: { created_at: "asc" }
      });

      const result = await resultPaginated(sales, page, perPage)
      return result;
  }

  async findByStatus(status: string, page: number, perPage: number): Promise<IResultPaginated> {
    const sales = await this.repository.findMany(
      {
        where: { status: status === 'completed' ? Status.COMPLETED : 
          status === 'pending' ? Status.PENDING : Status.CANCELED 
        },
        orderBy: { created_at: "asc" }
      });

      const result = await resultPaginated(sales, page, perPage)
      return result;
  }

  
  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const sales = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(sales, page, perPage)
    return result;
  }
  
  
  async create(data: ISaleRequest): Promise<ISale> {
    const createSale = await this.repository.create({
      data
    })
    return createSale;
  }

  async update(id: string, data: IUpdateSaleRequest): Promise<ISale> {

    const saleUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return saleUpdate;
  }

  async delete(id: string, user: string): Promise<void> {
    const saleDelete = await this.repository.update({
      data: {
        status: Status.CANCELED,
      },
      where: {
        id
      }
    })
  }

}
import { prisma } from "../../../lib/prisma";
import { IPaymentTypeRequest, IPaymentType, IUpdatePaymentTypeRequest } from "../../../dtos/PaymentType";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IPaymentTypeRepository } from "../../IPaymentTypeRepository";



export class PrismaPaymentTypeRepository implements IPaymentTypeRepository {
  private repository = prisma.paymentType;

  async findById(id: string): Promise<IPaymentType | null> {
    const paymentType = await this.repository.findFirst(
      {
        where: { id }
      });

    return paymentType ?? null;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const paymentTypes = await this.repository.findMany({
      orderBy: { name: "asc" },
    });

    const result = await resultPaginated(paymentTypes, page, perPage)
    return result;
  }
  
  
  async create(data: IPaymentTypeRequest): Promise<IPaymentType> {
    const createPaymentType = await this.repository.create({
      data
    })
    return createPaymentType;
  }

  async update(id: string, data: IUpdatePaymentTypeRequest): Promise<IPaymentType> {

    const paymentTypeUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return paymentTypeUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const paymentTypeDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
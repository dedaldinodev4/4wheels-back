import { prisma } from "../../../lib/prisma";
import { IPaymentRequest, IPayment } from "../../../dtos/Payment";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IPaymentRepository } from "../../IPaymentRepository";
import { Status } from "@prisma/client";



export class PrismaPaymentRepository implements IPaymentRepository {
  private repository = prisma.payment;

  async findById(id: string): Promise<IPayment | null> {
    const payment = await this.repository.findFirst(
      {
        where: { id }
      });

    return payment ?? null;
  }

  async findByStatus(status: string,page: number, perPage: number): Promise<IResultPaginated> {
    const payments = await this.repository.findMany(
      {
        where: { status: status === 'paid' ? Status.PAID : 
          status === 'pending' ? Status.PENDING : Status.CANCELED 
        }
      });

      const result = await resultPaginated(payments, page, perPage)
      return result;
  }

  
  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const payments = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(payments, page, perPage)
    return result;
  }
  
  
  async create(data: IPaymentRequest): Promise<IPayment> {
    const createPayment = await this.repository.create({
      data
    })
    return createPayment;
  }

  async update(id: string, data: IPaymentRequest): Promise<IPayment> {

    const paymentUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return paymentUpdate;
  }

  async pay(id: string): Promise<IPayment> {

    const paymentUpdate = await this.repository.update({
      data: {
        status: Status.PAID
      },
      where: {
        id
      }
    })

    return paymentUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const paymentDelete = await this.repository.update({
      data: {
        status: Status.CANCELED,
      },
      where: {
        id
      }
    })
  }

}
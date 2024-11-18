import { prisma } from "../../../lib/prisma";
import { IRentalRequest, IRental, type IUpdateRentalRequest } from "../../../dtos/Rental";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IRentalRepository } from "../../IRentalRepository";
import { Status } from "@prisma/client";



export class PrismaRentalRepository implements IRentalRepository {
 
  private repository = prisma.rental;

  async findById(id: string): Promise<IRental | null> {
    const rental = await this.repository.findFirst(
      {
        where: { id }
      });

    return rental ?? null;
  }


  async findByStatus(status: string, page: number, perPage: number): Promise<IResultPaginated> {
    const rentals = await this.repository.findMany(
      {
        where: { status: status === 'active' ? Status.ACTIVE : 
          status === 'done' ? Status.DONE : Status.CANCELED 
        },
        orderBy: { created_at: "asc" }
      });

      const result = await resultPaginated(rentals, page, perPage)
      return result;
  }

  
  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const rentals = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(rentals, page, perPage)
    return result;
  }
  
  
  async create(data: IRentalRequest): Promise<IRental> {
    const createRental = await this.repository.create({
      data
    })
    return createRental;
  }

  async update(id: string, data: IUpdateRentalRequest): Promise<IRental> {

    const rentalUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return rentalUpdate;
  }

  async delete(id: string): Promise<void> {
    const rentalDelete = await this.repository.update({
      data: {
        status: Status.CANCELED,
      },
      where: {
        id
      }
    })
  }

}
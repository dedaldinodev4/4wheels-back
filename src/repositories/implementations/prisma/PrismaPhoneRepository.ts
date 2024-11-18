import { prisma } from "../../../lib/prisma";
import { IPhoneRequest, IPhone } from "../../../dtos/Phone";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IPhoneRepository } from "../../IPhoneRepository";



export class PrismaPhoneRepository implements IPhoneRepository {
  private repository = prisma.phone;

  async findById(id: string): Promise<IPhone | null> {
    const phone = await this.repository.findFirst(
      {
        where: { id }
      });

    return phone ?? null;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const phones = await this.repository.findMany({
      orderBy: { number: "asc" },
    });

    const result = await resultPaginated(phones, page, perPage)
    return result;
  }
  
  
  async create(data: IPhoneRequest): Promise<IPhone> {
    const createPhone = await this.repository.create({
      data
    })
    return createPhone;
  }

  async update(id: string, data: IPhoneRequest): Promise<IPhone> {

    const phoneUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return phoneUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const phoneDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
import { prisma } from "../../../lib/prisma";
import { IDriverRequest, IDriver } from "../../../dtos/Driver";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IDriverRepository } from "../../IDriverRepository";



export class PrismaDriverRepository implements IDriverRepository {
  private repository = prisma.driver;

  async findById(id: string): Promise<IDriver | null> {
    const driver = await this.repository.findFirst(
      {
        where: { id }
      });

    return driver ?? null;
  }

  async findByIdentity(identity: string): Promise<IDriver | null> {
    const driver = await this.repository.findFirst(
      {
        where: { identity }
      });

    return driver ?? null;
  }

  async findByName(name: string): Promise<IDriver[]> {
    const drivers = await this.repository.findMany(
      {
        where: { name }
      });

    return drivers ?? [];
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const drivers = await this.repository.findMany({
      orderBy: { name: "asc" },
    });

    const result = await resultPaginated(drivers, page, perPage)
    return result;
  }


  async create(data: IDriverRequest): Promise<IDriver> {
    const createDriver = await this.repository.create({
      data
    })
    return createDriver;
  }

  async update(id: string, data: IDriverRequest): Promise<IDriver> {

    const driverUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return driverUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const driverDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
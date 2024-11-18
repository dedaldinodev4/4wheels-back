import { prisma } from "../../../lib/prisma";
import { IClientRequest, IClient } from "../../../dtos/Client";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IClientRepository } from "../../IClientRepository";



export class PrismaClientRepository implements IClientRepository {
  private repository = prisma.client;

  async findById(id: string): Promise<IClient | null> {
    const client = await this.repository.findFirst(
      {
        where: { id }
      });

    return client ?? null;
  }

  async findByIdentity(identity: string): Promise<IClient | null> {
    const client = await this.repository.findFirst(
      {
        where: { identity }
      });

    return client ?? null;
  }

  
  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const clients = await this.repository.findMany({
      orderBy: { name: "asc" },
    });

    const result = await resultPaginated(clients, page, perPage)
    return result;
  }
  
  
  async create(data: IClientRequest): Promise<IClient> {
    const createClient = await this.repository.create({
      data
    })
    return createClient;
  }

  async update(id: string, data: IClientRequest): Promise<IClient> {

    const clientUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return clientUpdate;
  }


  async delete(id: string, user: string): Promise<void> {
    const clientDelete = await this.repository.update({
      data: {
        status: false,
      },
      where: {
        id
      }
    })
  }

}
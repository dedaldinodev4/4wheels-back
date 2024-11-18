import { prisma } from "../../../lib/prisma";
import { IVehicleRequest, IVehicle } from "../../../dtos/Vehicle";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IVehicleRepository } from "../../IVehicleRepository";



export class PrismaVehicleRepository implements IVehicleRepository {
  
  private repository = prisma.vehicle;

  async findById(id: string): Promise<IVehicle | null> {
    const vehicle = await this.repository.findFirst(
      {
        where: { id }
      });

    return vehicle ?? null;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const vehicles = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(vehicles, page, perPage)
    return result;
  }
  
  
  async create(data: IVehicleRequest): Promise<IVehicle> {
    const createVehicle = await this.repository.create({
      data
    })
    return createVehicle;
  }

  async update(id: string, data: IVehicleRequest): Promise<IVehicle> {

    const vehicleUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return vehicleUpdate;
  }


  async delete(id: string): Promise<void> {
    const vehicleDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
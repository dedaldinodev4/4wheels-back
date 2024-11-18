import { prisma } from "../../../lib/prisma";
import { IVehicleImageVehicleRequest, IVehicleImageVehicle } from "../../../dtos/VehicleImageVehicle";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IVehicleImageVehicleRepository } from "../../IVehicleImageVehicleRepository";



export class PrismaVehicleImageVehicleRepository implements IVehicleImageVehicleRepository {
  
  private repository = prisma.vehicleImageVehicle;

  async findById(id: string): Promise<IVehicleImageVehicle | null> {
    const vehicleImageVehicle = await this.repository.findFirst(
      {
        where: { id }
      });

    return vehicleImageVehicle ?? null;
  }

  async findByVehicle(id_vehicle: string, page: number, perPage: number): Promise<IResultPaginated> {
    const vehicleImageVehicles = await this.repository.findMany({
      orderBy: { created_at: "asc" },
      where: {
        id_vehicle
      },
      include: {
        vehicle: true,
        vehicleImage: true
      }
    });

    const result = await resultPaginated(vehicleImageVehicles, page, perPage)
    return result;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const vehicleImageVehicles = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(vehicleImageVehicles, page, perPage)
    return result;
  }
  
  
  async create(data: IVehicleImageVehicleRequest): Promise<IVehicleImageVehicle> {
    const createVehicleImageVehicle = await this.repository.create({
      data
    })
    return createVehicleImageVehicle;
  }

  async update(id: string, data: IVehicleImageVehicleRequest): Promise<IVehicleImageVehicle> {

    const vehicleImageVehicleUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return vehicleImageVehicleUpdate;
  }


  async delete(id: string): Promise<void> {
    const vehicleImageVehicleDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
import { prisma } from "../../../lib/prisma";
import { IVehicleDetailRequest, IVehicleDetail } from "../../../dtos/VehicleDetail";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IVehicleDetailRepository } from "../../IVehicleDetailRepository";



export class PrismaVehicleDetailRepository implements IVehicleDetailRepository {
  private repository = prisma.vehicleDetail;

  async findById(id: string): Promise<IVehicleDetail | null> {
    const vehicleDetail = await this.repository.findFirst(
      {
        where: { id }
      });

    return vehicleDetail ?? null;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const vehicleDetails = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(vehicleDetails, page, perPage)
    return result;
  }
  
  
  async create(data: IVehicleDetailRequest): Promise<IVehicleDetail> {
    const createVehicleDetail = await this.repository.create({
      data
    })
    return createVehicleDetail;
  }

  async update(id: string, data: IVehicleDetailRequest): Promise<IVehicleDetail> {

    const vehicleDetailUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return vehicleDetailUpdate;
  }


  async delete(id: string): Promise<void> {
    const vehicleDetailDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
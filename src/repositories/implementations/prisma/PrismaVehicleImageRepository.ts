import { prisma } from "../../../lib/prisma";
import { IVehicleImageRequest, IVehicleImage } from "../../../dtos/VehicleImage";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IVehicleImageRepository } from "../../IVehicleImageRepository";



export class PrismaVehicleImageRepository implements IVehicleImageRepository {
  
  private repository = prisma.vehicleImage;

  async findById(id: string): Promise<IVehicleImage | null> {
    const vehicleImage = await this.repository.findFirst(
      {
        where: { id }
      });

    return vehicleImage ?? null;
  }


  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const vehicleImages = await this.repository.findMany({
      orderBy: { created_at: "asc" },
    });

    const result = await resultPaginated(vehicleImages, page, perPage)
    return result;
  }
  
  
  async create(data: IVehicleImageRequest): Promise<IVehicleImage> {
    const createVehicleImage = await this.repository.create({
      data
    })
    return createVehicleImage;
  }

  async update(id: string, data: IVehicleImageRequest): Promise<IVehicleImage> {

    const vehicleImageUpdate = await this.repository.update({
      data,
      where: {
        id
      }
    })

    return vehicleImageUpdate;
  }


  async delete(id: string): Promise<void> {
    const vehicleImageDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}
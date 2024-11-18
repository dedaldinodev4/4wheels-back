import { IVehicleImageRepository } from "../../../repositories/IVehicleImageRepository";
import { IUpdateVehicleImage, IUpdateVehicleImageRequest } from "./UpdateVehicleImageDTO";


export class UpdateVehicleImageUseCase {

  constructor(
    private vehicleImageRepository: IVehicleImageRepository
  ) { }

  async execute(id: string, data: IUpdateVehicleImageRequest): Promise<IUpdateVehicleImage | Error> {
    const vehicleImageExists = await this.vehicleImageRepository.findById(id);

    if (!vehicleImageExists) {
      throw new Error('VehicleImage does not exists.')
    }
    const result = await this.vehicleImageRepository.update(id, data);

    return result;
  }
}
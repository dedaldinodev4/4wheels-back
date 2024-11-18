import { IVehicleRepository } from "../../../repositories/IVehicleRepository";
import { IUpdateVehicle, IUpdateVehicleRequest } from "./UpdateVehicleDTO";


export class UpdateVehicleUseCase {

  constructor(
    private vehicleRepository: IVehicleRepository
  ) { }

  async execute(id: string, data: IUpdateVehicleRequest): Promise<IUpdateVehicle | Error> {
    const vehicleExists = await this.vehicleRepository.findById(id);

    if (!vehicleExists) {
      throw new Error('Vehicle does not exists.')
    }
    const result = await this.vehicleRepository.update(id, data);

    return result;
  }
}
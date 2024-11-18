import { IVehicleImageVehicleRepository } from "../../../repositories/IVehicleImageVehicleRepository";
import { IUpdateVehicleImageVehicle, IUpdateVehicleImageVehicleRequest } from "./UpdateVehicleImageVehicleDTO";


export class UpdateVehicleImageVehicleUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(id: string, data: IUpdateVehicleImageVehicleRequest): Promise<IUpdateVehicleImageVehicle | Error> {
    const vehicleImageVehicleExists = await this.vehicleImageVehicleRepository.findById(id);

    if (!vehicleImageVehicleExists) {
      throw new Error('VehicleImageVehicle does not exists.')
    }
    const result = await this.vehicleImageVehicleRepository.update(id, data);

    return result;
  }
}
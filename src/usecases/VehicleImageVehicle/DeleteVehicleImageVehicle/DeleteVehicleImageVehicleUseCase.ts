import {
  IVehicleImageVehicleRepository
} from "../../../repositories/IVehicleImageVehicleRepository";

export class DeleteVehicleImageVehicleUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(id: string): Promise<void> {

    const vehicleImageVehicleExists = await this.vehicleImageVehicleRepository.findById(id);
    
    if (!vehicleImageVehicleExists) {
      throw new Error('VehicleImageVehicle does not exists.');
    }
    const result = await this.vehicleImageVehicleRepository.delete(id);

    return result;
  }
}
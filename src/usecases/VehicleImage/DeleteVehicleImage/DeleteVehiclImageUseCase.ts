import {
  IVehicleImageRepository
} from "../../../repositories/IVehicleImageRepository";

export class DeleteVehicleImageUseCase {

  constructor(
    private vehicleImageRepository: IVehicleImageRepository
  ) { }

  async execute(id: string): Promise<void> {

    const vehicleImageExists = await this.vehicleImageRepository.findById(id);
    
    if (!vehicleImageExists) {
      throw new Error('VehicleImage does not exists.');
    }
    const result = await this.vehicleImageRepository.delete(id);

    return result;
  }
}
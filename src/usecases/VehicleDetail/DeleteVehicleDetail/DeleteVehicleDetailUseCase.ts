import {
  IVehicleDetailRepository
} from "../../../repositories/IVehicleDetailRepository";

export class DeleteVehicleDetailUseCase {

  constructor(
    private vehicleDetailRepository: IVehicleDetailRepository
  ) { }

  async execute(id: string): Promise<void> {

    const vehicleDetailExists = await this.vehicleDetailRepository.findById(id);
    
    if (!vehicleDetailExists) {
      throw new Error('VehicleDetail does not exists.');
    }
    const result = await this.vehicleDetailRepository.delete(id);

    return result;
  }
}
import {
  IVehicleRepository
} from "../../../repositories/IVehicleRepository";
import {
  IUserRepository
} from "../../../repositories/IUserRepository";


export class DeleteVehicleUseCase {

  constructor(
    private vehicleRepository: IVehicleRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<void> {

    const vehicleExists = await this.vehicleRepository.findById(id);
    
    if (!vehicleExists) {
      throw new Error('Vehicle does not exists.');
    }

    if (!vehicleExists.availability) {
      throw new Error('Vehicle has already been availability.');
    }
    const result = await this.vehicleRepository.delete(id);

    return result;
  }
}
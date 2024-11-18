import { 
  IVehicleRepository 
} from "../../../repositories/IVehicleRepository";
import { IVehicle } from "./FindByIdVehicleDTO";


export class FindByIdVehicleUseCase {

  constructor(
    private vehicleRepository: IVehicleRepository
  ) { }

  async execute(id: string): Promise<IVehicle | Error> {

    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new Error("Vehicle does not exists.");
    }
    return vehicle;
  }
}
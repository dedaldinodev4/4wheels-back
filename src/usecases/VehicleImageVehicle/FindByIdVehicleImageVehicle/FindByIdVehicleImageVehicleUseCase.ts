import { 
  IVehicleImageVehicleRepository 
} from "../../../repositories/IVehicleImageVehicleRepository";
import { IVehicleImageVehicle } from "./FindByIdVehicleImageVehicleDTO";


export class FindByIdVehicleImageVehicleUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(id: string): Promise<IVehicleImageVehicle | Error> {

    const vehicleImageVehicle = await this.vehicleImageVehicleRepository.findById(id);
    if (!vehicleImageVehicle) {
      throw new Error("VehicleImageVehicle does not exists.");
    }
    return vehicleImageVehicle;
  }
}
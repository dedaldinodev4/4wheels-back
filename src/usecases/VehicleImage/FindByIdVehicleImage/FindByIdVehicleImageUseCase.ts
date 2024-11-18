import { 
  IVehicleImageRepository 
} from "../../../repositories/IVehicleImageRepository";
import { IVehicleImage } from "./FindByIdVehicleImageDTO";


export class FindByIdVehicleImageUseCase {

  constructor(
    private vehicleImageRepository: IVehicleImageRepository
  ) { }

  async execute(id: string): Promise<IVehicleImage | Error> {

    const vehicleImage = await this.vehicleImageRepository.findById(id);
    if (!vehicleImage) {
      throw new Error("VehicleImage does not exists.");
    }
    return vehicleImage;
  }
}
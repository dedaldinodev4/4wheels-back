import {
  IVehicleImageVehicleRepository
} from "../../../repositories/IVehicleImageVehicleRepository";
import {
  ICreateVehicleImageVehicle,
  ICreateVehicleImageVehicleRequest
} from "./CreateVehicleImageVehicleDTO";


export class CreateVehicleImageVehicleUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(data: ICreateVehicleImageVehicleRequest): Promise<ICreateVehicleImageVehicle | Error> {

    const result = await this.vehicleImageVehicleRepository.create(data);
    return result;
  }
}
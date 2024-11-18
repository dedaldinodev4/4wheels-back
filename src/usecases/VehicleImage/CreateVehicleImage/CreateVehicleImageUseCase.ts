import {
  IVehicleImageRepository
} from "../../../repositories/IVehicleImageRepository";
import {
  ICreateVehicleImage,
  ICreateVehicleImageRequest
} from "./CreateVehicleImageDTO";


export class CreateVehicleImageUseCase {

  constructor(
    private vehicleImageRepository: IVehicleImageRepository
  ) { }

  async execute(data: ICreateVehicleImageRequest): Promise<ICreateVehicleImage | Error> {

    const result = await this.vehicleImageRepository.create(data);
    return result;
  }
}
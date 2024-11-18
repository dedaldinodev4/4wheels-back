import { IVehicleDetailRepository } from "../../../repositories/IVehicleDetailRepository";
import { IUpdateVehicleDetail, IUpdateVehicleDetailRequest } from "./UpdateVehicleDetailDTO";


export class UpdateVehicleDetailUseCase {

  constructor(
    private vehicleDetailRepository: IVehicleDetailRepository
  ) { }

  async execute(id: string, data: IUpdateVehicleDetailRequest): Promise<IUpdateVehicleDetail | Error> {
    const vehicleDetailExists = await this.vehicleDetailRepository.findById(id);

    if (!vehicleDetailExists) {
      throw new Error('VehicleDetail does not exists.')
    }
    const result = await this.vehicleDetailRepository.update(id, data);

    return result;
  }
}
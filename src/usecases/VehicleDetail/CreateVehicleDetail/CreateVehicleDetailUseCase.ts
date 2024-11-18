import type { IUserRepository } from "@/repositories/IUserRepository";
import {
  IVehicleDetailRepository
} from "../../../repositories/IVehicleDetailRepository";
import {
  ICreateVehicleDetail,
  ICreateVehicleDetailRequest
} from "./CreateVehicleDetailDTO";


export class CreateVehicleDetailUseCase {

  constructor(
    private vehicleDetailRepository: IVehicleDetailRepository
  ) { }

  async execute(data: ICreateVehicleDetailRequest): Promise<ICreateVehicleDetail | Error> {

    const result = await this.vehicleDetailRepository.create(data);
    return result;
  }
}
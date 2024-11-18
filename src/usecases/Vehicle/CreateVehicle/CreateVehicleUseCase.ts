import type { IUserRepository } from "@/repositories/IUserRepository";
import {
  IVehicleRepository
} from "../../../repositories/IVehicleRepository";
import {
  ICreateVehicle,
  ICreateVehicleRequest
} from "./CreateVehicleDTO";


export class CreateVehicleUseCase {

  constructor(
    private vehicleRepository: IVehicleRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateVehicleRequest): Promise<ICreateVehicle | Error> {

    const userExists = await this.userRepository.findById(data.created_by);

    if (!userExists) {
      throw new Error("User does not exists.");
    }
    
    const result = await this.vehicleRepository.create(data);
    return result;
  }
}
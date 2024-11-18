import { 
  IVehicleImageVehicleRepository 
} from "../../../repositories/IVehicleImageVehicleRepository";
import { IResultPaginated } from "./FindByVehicleDTO";


export class FindByVehicleUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(id_vehicle: string, page: number, perPage: number): Promise<IResultPaginated> {

    const vehicleImageVehicles = await this.vehicleImageVehicleRepository.findByVehicle(id_vehicle, page, perPage);
    return vehicleImageVehicles;
  }
}
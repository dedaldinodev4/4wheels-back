import { 
  IVehicleImageVehicleRepository 
} from "../../../repositories/IVehicleImageVehicleRepository";
import { IResultPaginated } from "./FindAllVehicleImageVehiclesDTO";


export class FindAllVehicleImageVehiclesUseCase {

  constructor(
    private vehicleImageVehicleRepository: IVehicleImageVehicleRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.vehicleImageVehicleRepository.findAll(page, perPage);
    return result;
  }
}
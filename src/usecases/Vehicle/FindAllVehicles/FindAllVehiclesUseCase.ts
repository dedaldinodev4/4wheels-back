import { 
  IVehicleRepository 
} from "../../../repositories/IVehicleRepository";
import { IResultPaginated } from "./FindAllVehiclesDTO";


export class FindAllVehiclesUseCase {

  constructor(
    private vehicleRepository: IVehicleRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.vehicleRepository.findAll(page, perPage);
    return result;
  }
}
import { 
  IVehicleDetailRepository 
} from "../../../repositories/IVehicleDetailRepository";
import { IResultPaginated } from "./FindAllVehicleDetailsDTO";


export class FindAllVehicleDetailsUseCase {

  constructor(
    private vehicleDetailRepository: IVehicleDetailRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.vehicleDetailRepository.findAll(page, perPage);
    return result;
  }
}
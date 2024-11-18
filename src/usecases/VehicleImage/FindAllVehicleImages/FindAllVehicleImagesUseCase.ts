import { 
  IVehicleImageRepository 
} from "../../../repositories/IVehicleImageRepository";
import { IResultPaginated } from "./FindAllVehicleImagesDTO";


export class FindAllVehicleImagesUseCase {

  constructor(
    private vehicleImageRepository: IVehicleImageRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.vehicleImageRepository.findAll(page, perPage);
    return result;
  }
}
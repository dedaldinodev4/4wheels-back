import { 
  IVehicleDetailRepository 
} from "../../../repositories/IVehicleDetailRepository";
import { IVehicleDetail } from "./FindByIdVehicleDetailDTO";


export class FindByIdVehicleDetailUseCase {

  constructor(
    private vehicleDetailRepository: IVehicleDetailRepository
  ) { }

  async execute(id: string): Promise<IVehicleDetail | Error> {

    const vehicleDetail = await this.vehicleDetailRepository.findById(id);
    if (!vehicleDetail) {
      throw new Error("VehicleDetail does not exists.");
    }
    return vehicleDetail;
  }
}
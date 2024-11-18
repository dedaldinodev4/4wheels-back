import { IDriverRepository } from "../../../repositories/IDriverRepository";
import { IUpdateDriver, IUpdateDriverRequest } from "./UpdateDriverDTO";


export class UpdateDriverUseCase {

  constructor(
    private driverRepository: IDriverRepository
  ) { }

  async execute(id: string, data: IUpdateDriverRequest): Promise<IUpdateDriver | Error> {
    const driverExists = await this.driverRepository.findById(id);

    if (!driverExists) {
      throw new Error('Driver does not exists.')
    }
    const result = await this.driverRepository.update(id, data);

    return result;
  }
}
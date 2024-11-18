import { 
  IDriverRepository 
} from "../../../repositories/IDriverRepository";
import { IDriver } from "./FindByIdDriverDTO";


export class FindByIdDriverUseCase {

  constructor(
    private driverRepository: IDriverRepository
  ) { }

  async execute(id: string): Promise<IDriver | Error> {

    const driver = await this.driverRepository.findById(id);
    if (!driver) {
      throw new Error("Driver does not exists.");
    }
    return driver;
  }
}
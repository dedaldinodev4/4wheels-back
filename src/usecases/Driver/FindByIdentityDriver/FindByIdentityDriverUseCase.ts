import { 
  IDriverRepository 
} from "../../../repositories/IDriverRepository";
import { IDriver } from "./FindByIdentityDriverDTO";


export class FindByIdentityDriverUseCase {

  constructor(
    private driverRepository: IDriverRepository
  ) { }

  async execute(identity: string): Promise<IDriver | Error> {

    const driver = await this.driverRepository.findByIdentity(identity);
    if (!driver) {
      throw new Error("Driver does not exists.");
    }
    return driver;
  }
}
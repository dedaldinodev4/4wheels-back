import { 
  IDriverRepository 
} from "../../../repositories/IDriverRepository";
import { 
  ICreateDriver, 
  ICreateDriverRequest 
} from "./CreateDriverDTO";


export class CreateDriverUseCase {

  constructor(
    private driverRepository: IDriverRepository
  ) { }

  async execute(data: ICreateDriverRequest): Promise<ICreateDriver | Error> {
    const driverExists = await this.driverRepository.findByIdentity(data.identity);

    if (driverExists) {
      throw new Error("Driver already exists.");
    }

    const result = await this.driverRepository.create(data);
    return result;
  }
}
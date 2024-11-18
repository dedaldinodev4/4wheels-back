import { 
  IDriverRepository 
} from "../../../repositories/IDriverRepository";
import { IResultPaginated } from "./FindAllDriversDTO";


export class FindAllDriversUseCase {

  constructor(
    private driverRepository: IDriverRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.driverRepository.findAll(page, perPage);
    return result;
  }
}
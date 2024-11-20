import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { IResultPaginated } from "./FindAllSalesDTO";


export class FindAllSalesUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.saleRepository.findAll(page, perPage);
    return result;
  }
}
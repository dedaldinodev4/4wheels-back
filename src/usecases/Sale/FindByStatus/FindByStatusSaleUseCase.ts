import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { IResultPaginated } from "./FindByStatusSaleDTO";


export class FindByStatusSaleUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(status: string, page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.saleRepository.findByStatus(status, page, perPage);
    return result;
  }
}
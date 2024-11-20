import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { IResultPaginated } from "./FindBySalerDTO";


export class FindBySalerUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(saler_id: string, page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.saleRepository.findByStatus(saler_id, page, perPage);
    return result;
  }
}
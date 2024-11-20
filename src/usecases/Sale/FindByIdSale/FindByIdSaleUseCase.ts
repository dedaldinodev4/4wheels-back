import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { ISale } from "./FindByIdSaleDTO";


export class FindByIdSaleUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(id: string): Promise<ISale | Error> {

    const saleExists = await this.saleRepository.findById(id);
    if (!saleExists) {
      throw new Error("Sale does not exists.");
    }
    return saleExists;
  }
}
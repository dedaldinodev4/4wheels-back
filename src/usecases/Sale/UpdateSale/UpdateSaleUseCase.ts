import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { 
  IUpdateSale, 
  IUpdateSaleRequest 
} from "./UpdateSaleDTO";


export class UpdateSaleUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(id: string, data: IUpdateSaleRequest): Promise<IUpdateSale | Error> {
    const saleExists = await this.saleRepository.findById(id);

    if (!saleExists) {
      throw new Error('Sale does not exists.')
    }
    const result = await this.saleRepository.update(id, data);

    return result;
  }
}
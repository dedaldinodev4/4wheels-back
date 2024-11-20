import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { 
  ICreateSale, 
  ICreateSaleRequest 
} from "./CreateSaleDTO";


export class CreateSaleUseCase {

  constructor(
    private saleRepository: ISaleRepository
  ) { }

  async execute(data: ICreateSaleRequest): Promise<ICreateSale | Error> {
    const result = await this.saleRepository.create(data);
    return result;
  }
}
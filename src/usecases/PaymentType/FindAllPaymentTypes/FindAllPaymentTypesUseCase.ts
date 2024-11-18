import { 
  IPaymentTypeRepository 
} from "../../../repositories/IPaymentTypeRepository";
import { IResultPaginated } from "./FindAllPaymentTypesDTO";


export class FindAllPaymentTypesUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.paymentTypeRepository.findAll(page, perPage);
    return result;
  }
}
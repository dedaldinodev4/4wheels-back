import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { IResultPaginated } from "./FindAllPaymentsDTO";


export class FindAllPaymentsUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.paymentRepository.findAll(page, perPage);
    return result;
  }
}
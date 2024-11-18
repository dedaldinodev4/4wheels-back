import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { IResultPaginated } from "./FindByStatusPaymentDTO";


export class FindByStatusPaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(status: string, page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.paymentRepository.findByStatus(status, page, perPage);
    return result;
  }
}
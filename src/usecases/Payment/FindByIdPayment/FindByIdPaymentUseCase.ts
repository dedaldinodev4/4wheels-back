import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { IPayment } from "./FindByIdPaymentDTO";


export class FindByIdPaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id: string): Promise<IPayment | Error> {

    const paymentExists = await this.paymentRepository.findById(id);
    if (!paymentExists) {
      throw new Error("Payment does not exists.");
    }
    return paymentExists;
  }
}
import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { IPayment } from "./PayPaymentDTO";


export class PayPaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id: string): Promise<IPayment | Error> {

    const paymentExists = await this.paymentRepository.findById(id);
    if (!paymentExists) {
      throw new Error("Payment does not exists.");
    }

    const pay = await this.paymentRepository.pay(id);
    return pay;
  }
}
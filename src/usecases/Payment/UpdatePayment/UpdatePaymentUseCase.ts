import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { 
  IUpdatePayment, 
  IUpdatePaymentRequest 
} from "./UpdatePaymentDTO";


export class UpdatePaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id: string, data: IUpdatePaymentRequest): Promise<IUpdatePayment | Error> {
    const paymentExists = await this.paymentRepository.findById(id);

    if (!paymentExists) {
      throw new Error('Payment does not exists.')
    }
    const result = await this.paymentRepository.update(id, data);

    return result;
  }
}
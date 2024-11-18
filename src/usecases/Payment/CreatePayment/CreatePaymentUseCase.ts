import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { 
  ICreatePayment, 
  ICreatePaymentRequest 
} from "./CreatePaymentDTO";


export class CreatePaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(data: ICreatePaymentRequest): Promise<ICreatePayment | Error> {
    const result = await this.paymentRepository.create(data);
    return result;
  }
}
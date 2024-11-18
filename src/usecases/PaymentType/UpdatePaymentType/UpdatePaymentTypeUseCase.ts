import { 
  IPaymentTypeRepository 
} from "../../../repositories/IPaymentTypeRepository";
import { 
  IUpdatePaymentType, 
  IUpdatePaymentTypeRequest 
} from "./UpdatePaymentTypeDTO";


export class UpdatePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(id: string, data: IUpdatePaymentTypeRequest): Promise<IUpdatePaymentType | Error> {
    const paymentTypeExists = await this.paymentTypeRepository.findById(id);

    if (!paymentTypeExists) {
      throw new Error('PaymentType does not exists.')
    }
    const result = await this.paymentTypeRepository.update(id, data);

    return result;
  }
}
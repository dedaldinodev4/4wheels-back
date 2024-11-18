import { 
  IPaymentTypeRepository 
} from "../../../repositories/IPaymentTypeRepository";
import { IPaymentType } from "./FindByIdPaymentTypeDTO";


export class FindByIdPaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(id: string): Promise<IPaymentType | Error> {

    const paymentTypeExists = await this.paymentTypeRepository.findById(id);
    if (!paymentTypeExists) {
      throw new Error("PaymentType does not exists.");
    }
    return paymentTypeExists;
  }
}
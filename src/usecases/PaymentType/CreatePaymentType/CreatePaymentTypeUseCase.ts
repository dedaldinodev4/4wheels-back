import { 
  IPaymentTypeRepository 
} from "../../../repositories/IPaymentTypeRepository";
import { 
  ICreatePaymentType, 
  ICreatePaymentTypeRequest 
} from "./CreatePaymentTypeDTO";


export class CreatePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(data: ICreatePaymentTypeRequest): Promise<ICreatePaymentType | Error> {

    const result = await this.paymentTypeRepository.create(data);
    return result;
  }
}
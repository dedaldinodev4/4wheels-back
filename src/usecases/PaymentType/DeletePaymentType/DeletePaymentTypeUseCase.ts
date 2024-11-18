import { 
  IPaymentTypeRepository 
} from "../../../repositories/IPaymentTypeRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeletePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const paymentTypeExists = await this.paymentTypeRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!paymentTypeExists) {
      throw new Error('PaymentType does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    if (!paymentTypeExists.status) {
      throw new Error('PaymentType has already been deleted.');
    }
    const result = await this.paymentTypeRepository.delete(id, user);

    return result;
  }
}
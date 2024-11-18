import { 
  IPaymentRepository 
} from "../../../repositories/IPaymentRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeletePaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const paymentExists = await this.paymentRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!paymentExists) {
      throw new Error('Payment does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    if (!paymentExists.status) {
      throw new Error('Payment has already been deleted.');
    }
    const result = await this.paymentRepository.delete(id, user);

    return result;
  }
}
import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeleteInvoiceUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const invoiceExists = await this.invoiceRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!invoiceExists) {
      throw new Error('Invoice does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    const result = await this.invoiceRepository.delete(id, user);

    return result;
  }
}
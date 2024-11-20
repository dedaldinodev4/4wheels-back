import { 
  ISaleRepository 
} from "../../../repositories/ISaleRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeleteSaleUseCase {

  constructor(
    private saleRepository: ISaleRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const SaleExists = await this.saleRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!SaleExists) {
      throw new Error('Sale does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    const result = await this.saleRepository.delete(id, user);

    return result;
  }
}
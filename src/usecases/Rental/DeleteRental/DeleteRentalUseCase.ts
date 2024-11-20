import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeleteRentalUseCase {

  constructor(
    private rentalRepository: IRentalRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const rentalExists = await this.rentalRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!rentalExists) {
      throw new Error('Rental does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    const result = await this.rentalRepository.delete(id, user);

    return result;
  }
}
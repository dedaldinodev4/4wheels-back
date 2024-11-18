import {
  IDriverRepository
} from "../../../repositories/IDriverRepository";
import {
  IUserRepository
} from "../../../repositories/IUserRepository";


export class DeleteDriverUseCase {

  constructor(
    private driverRepository: IDriverRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void> {

    const driverExists = await this.driverRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!driverExists) {
      throw new Error('Driver does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    const result = await this.driverRepository.delete(id, user);
    return result;
  }
}
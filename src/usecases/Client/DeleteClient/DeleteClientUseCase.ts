import {
  IClientRepository
} from "../../../repositories/IClientRepository";
import {
  IUserRepository
} from "../../../repositories/IUserRepository";


export class DeleteClientUseCase {

  constructor(
    private clientRepository: IClientRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void> {

    const clientExists = await this.clientRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!clientExists) {
      throw new Error('Client does not exists.');
    }

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    if (!clientExists.status) {
      throw new Error('Client has already been deleted.');
    }
    const result = await this.clientRepository.delete(id, user);

    return result;
  }
}
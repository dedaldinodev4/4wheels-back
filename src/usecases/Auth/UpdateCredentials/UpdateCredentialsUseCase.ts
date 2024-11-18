import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import {
  IUpdateUserCredentials,
  IUpdateUserCredentialsRequest
} from "./UpdateCredentialsDTO";


export class UpdateCredentialsUseCase {

  constructor(
    private authRepository: IAuthRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, data: IUpdateUserCredentialsRequest):
    Promise<IUpdateUserCredentials | Error> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('user does not exists.')
    }
    const result = await this.authRepository.updateCredentials(id, data);
    return result;
  }
}
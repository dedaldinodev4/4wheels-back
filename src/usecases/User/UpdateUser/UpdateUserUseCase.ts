import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUser, IUpdateUserRequest } from "./UpdateUserDTO";


export class UpdateUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, data: IUpdateUserRequest): Promise<IUpdateUser | Error> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('user does not exists.')
    }
    const result = await this.userRepository.update(id, data);

    return result;
  }
}
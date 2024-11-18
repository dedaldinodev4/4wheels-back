import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUser, ICreateUserRequest } from "./CreateUserDTO";


export class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserRequest): Promise<ICreateUser | Error> {

    const userExists = await this.userRepository.findByEmail(data.email);

    if (!userExists) {
      throw new Error("User does not exists.");
    }
    const result = await this.userRepository.create(data);
    return result;
  }
}
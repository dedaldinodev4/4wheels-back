import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { ICreatePhone, ICreatePhoneRequest } from "./CreatePhoneDTO";


export class CreatePhoneUseCase {

  constructor(
    private phoneRepository: IPhoneRepository
  ) { }

  async execute(data: ICreatePhoneRequest): Promise<ICreatePhone | Error> {
    const result = await this.phoneRepository.create(data);
    return result;
  }
}
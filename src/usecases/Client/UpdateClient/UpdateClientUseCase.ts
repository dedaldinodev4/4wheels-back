import { IClientRepository } from "../../../repositories/IClientRepository";
import { IUpdateClient, IUpdateClientRequest } from "./UpdateClientDTO";


export class UpdateClientUseCase {

  constructor(
    private clientRepository: IClientRepository
  ) { }

  async execute(id: string, data: IUpdateClientRequest): Promise<IUpdateClient | Error> {
    const clientExists = await this.clientRepository.findById(id);

    if (!clientExists) {
      throw new Error('Client does not exists.')
    }
    const result = await this.clientRepository.update(id, data);

    return result;
  }
}
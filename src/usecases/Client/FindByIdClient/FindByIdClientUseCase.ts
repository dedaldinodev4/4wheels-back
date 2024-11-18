import { 
  IClientRepository 
} from "../../../repositories/IClientRepository";
import { IClient } from "./FindByIdClientDTO";


export class FindByIdClientUseCase {

  constructor(
    private clientRepository: IClientRepository
  ) { }

  async execute(id: string): Promise<IClient | Error> {

    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new Error("Client does not exists.");
    }
    return client;
  }
}
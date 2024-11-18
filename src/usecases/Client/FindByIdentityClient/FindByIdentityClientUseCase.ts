import { 
  IClientRepository 
} from "../../../repositories/IClientRepository";
import { IClient } from "./FindByIdentityClientDTO";


export class FindByIdentityClientUseCase {

  constructor(
    private clientRepository: IClientRepository
  ) { }

  async execute(identity: string): Promise<IClient | Error> {

    const client = await this.clientRepository.findByIdentity(identity);
    if (!client) {
      throw new Error("Client does not exists.");
    }
    return client;
  }
}
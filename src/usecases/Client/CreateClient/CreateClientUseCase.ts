import { 
  IClientRepository 
} from "../../../repositories/IClientRepository";
import { 
  ICreateClient, 
  ICreateClientRequest 
} from "./CreateClientDTO";


export class CreateClientUseCase {

  constructor(
    private clientRepository: IClientRepository
  ) { }

  async execute(data: ICreateClientRequest): Promise<ICreateClient | Error> {
    const clientExists = await this.clientRepository.findByIdentity(data.identity);

    if (clientExists) {
      throw new Error("Client already exists.");
    }

    const result = await this.clientRepository.create(data);
    return result;
  }
}
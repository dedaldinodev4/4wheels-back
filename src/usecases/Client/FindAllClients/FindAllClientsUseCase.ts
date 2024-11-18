import { 
  IClientRepository 
} from "../../../repositories/IClientRepository";
import { IResultPaginated } from "./FindAllClientsDTO";


export class FindAllClientsUseCase {

  constructor(
    private clientRepository: IClientRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.clientRepository.findAll(page, perPage);
    return result;
  }
}
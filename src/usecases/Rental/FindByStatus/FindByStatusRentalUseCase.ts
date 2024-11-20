import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { IResultPaginated } from "./FindByStatusRentalDTO";


export class FindByStatusRentalUseCase {

  constructor(
    private rentalRepository: IRentalRepository
  ) { }

  async execute(status: string, page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.rentalRepository.findByStatus(status, page, perPage);
    return result;
  }
}
import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { IResultPaginated } from "./FindAllRentalsDTO";


export class FindAllRentalsUseCase {

  constructor(
    private rentalRepository: IRentalRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.rentalRepository.findAll(page, perPage);
    return result;
  }
}
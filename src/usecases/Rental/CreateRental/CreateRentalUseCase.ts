import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { 
  ICreateRental, 
  ICreateRentalRequest 
} from "./CreateRentalDTO";


export class CreateRentalUseCase {

  constructor(
    private rentalRepository: IRentalRepository
  ) { }

  async execute(data: ICreateRentalRequest): Promise<ICreateRental | Error> {
    const result = await this.rentalRepository.create(data);
    return result;
  }
}
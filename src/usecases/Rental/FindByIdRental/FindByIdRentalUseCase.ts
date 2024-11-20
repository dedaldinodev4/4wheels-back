import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { IRental } from "./FindByIdRentalDTO";


export class FindByIdRentalUseCase {

  constructor(
    private rentalRepository: IRentalRepository
  ) { }

  async execute(id: string): Promise<IRental | Error> {

    const rentalExists = await this.rentalRepository.findById(id);
    if (!rentalExists) {
      throw new Error("Rental does not exists.");
    }
    return rentalExists;
  }
}
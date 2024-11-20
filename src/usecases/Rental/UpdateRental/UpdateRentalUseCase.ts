import { 
  IRentalRepository 
} from "../../../repositories/IRentalRepository";
import { 
  IUpdateRental, 
  IUpdateRentalRequest 
} from "./UpdateRentalDTO";


export class UpdateRentalUseCase {

  constructor(
    private rentalRepository: IRentalRepository
  ) { }

  async execute(id: string, data: IUpdateRentalRequest): Promise<IUpdateRental | Error> {
    const rentalExists = await this.rentalRepository.findById(id);

    if (!rentalExists) {
      throw new Error('Rental does not exists.')
    }
    const result = await this.rentalRepository.update(id, data);

    return result;
  }
}
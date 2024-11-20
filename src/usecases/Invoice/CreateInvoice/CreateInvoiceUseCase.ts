import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { 
  ICreateInvoice, 
  ICreateInvoiceRequest 
} from "./CreateInvoiceDTO";


export class CreateInvoiceUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository
  ) { }

  async execute(data: ICreateInvoiceRequest): Promise<ICreateInvoice | Error> {
    const result = await this.invoiceRepository.create(data);
    return result;
  }
}
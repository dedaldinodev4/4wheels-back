import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { 
  IUpdateInvoice, 
  IUpdateInvoiceRequest 
} from "./UpdateInvoiceDTO";


export class UpdateInvoiceUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository
  ) { }

  async execute(id: string, data: IUpdateInvoiceRequest): Promise<IUpdateInvoice | Error> {
    const invoiceExists = await this.invoiceRepository.findById(id);

    if (!invoiceExists) {
      throw new Error('Invoice does not exists.')
    }
    const result = await this.invoiceRepository.update(id, data);

    return result;
  }
}
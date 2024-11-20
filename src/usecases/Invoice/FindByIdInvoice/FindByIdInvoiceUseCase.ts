import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { IInvoice } from "./FindByIdInvoiceDTO";


export class FindByIdInvoiceUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository
  ) { }

  async execute(id: string): Promise<IInvoice | Error> {

    const invoiceExists = await this.invoiceRepository.findById(id);
    if (!invoiceExists) {
      throw new Error("Invoice does not exists.");
    }
    return invoiceExists;
  }
}
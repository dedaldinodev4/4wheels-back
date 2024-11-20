import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { IResultPaginated } from "./FindByStatusInvoiceDTO";


export class FindByStatusInvoiceUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository
  ) { }

  async execute(status: string, page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.invoiceRepository.findByStatus(status, page, perPage);
    return result;
  }
}
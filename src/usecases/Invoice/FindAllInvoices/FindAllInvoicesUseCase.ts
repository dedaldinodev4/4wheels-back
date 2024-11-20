import { 
  IInvoiceRepository 
} from "../../../repositories/IInvoiceRepository";
import { IResultPaginated } from "./FindAllInvoicesDTO";


export class FindAllInvoicesUseCase {

  constructor(
    private invoiceRepository: IInvoiceRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.invoiceRepository.findAll(page, perPage);
    return result;
  }
}
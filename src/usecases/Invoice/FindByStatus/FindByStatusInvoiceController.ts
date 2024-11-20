import { Request, Response } from 'express'
import { 
  FindByStatusInvoiceUseCase 
} from './FindByStatusInvoiceUseCase'


export class FindByStatusInvoiceController {
  constructor(
    private findByStatusInvoiceUseCase: FindByStatusInvoiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page = parseInt(request.query.page as string);
      const limit = parseInt(request.query.limit as string);
      const status = request.query.status as string;
      
      const data = await this.findByStatusInvoiceUseCase.execute(status, page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
import { Request, Response } from 'express'
import { 
  DeleteInvoiceUseCase 
} from './DeleteInvoiceUseCase'


export class DeleteInvoiceController {
  constructor(
    private deleteInvoiceUseCase: DeleteInvoiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteInvoiceUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
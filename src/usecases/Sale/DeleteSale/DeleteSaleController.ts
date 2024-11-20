import { Request, Response } from 'express'
import { 
  DeleteSaleUseCase 
} from './DeleteSaleUseCase'


export class DeleteSaleController {
  constructor(
    private deleteSaleUseCase: DeleteSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteSaleUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
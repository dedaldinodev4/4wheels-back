import { Request, Response } from 'express'
import { 
  DeletePaymentTypeUseCase 
} from './DeletePaymentTypeUseCase'


export class DeletePaymentTypeController {
  constructor(
    private deletePaymentTypeUseCase: DeletePaymentTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deletePaymentTypeUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
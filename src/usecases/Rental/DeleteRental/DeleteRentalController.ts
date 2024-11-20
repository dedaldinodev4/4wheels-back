import { Request, Response } from 'express'
import { 
  DeleteRentalUseCase 
} from './DeleteRentalUseCase'


export class DeleteRentalController {
  constructor(
    private deleteRentalUseCase: DeleteRentalUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteRentalUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
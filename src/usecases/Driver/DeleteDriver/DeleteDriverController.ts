import { Request, Response } from 'express'
import { DeleteDriverUseCase } from './DeleteDriverUseCase'


export class DeleteDriverController {
  constructor(
    private deleteDriverUseCase: DeleteDriverUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteDriverUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
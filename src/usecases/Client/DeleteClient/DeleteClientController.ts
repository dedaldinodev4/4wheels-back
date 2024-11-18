import { Request, Response } from 'express'
import { DeleteClientUseCase } from './DeleteClientUseCase'


export class DeleteClientController {
  constructor(
    private deleteClientUseCase: DeleteClientUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteClientUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
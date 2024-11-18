import { Request, Response } from 'express'
import { FindByIdClientUseCase } from './FindByIdClientUseCase'


export class FindByIdClientController {
  constructor(
    private findByIdClientUseCase: FindByIdClientUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdClientUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
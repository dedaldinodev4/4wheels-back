import { Request, Response } from 'express'
import { FindAllDriversUseCase } from './FindAllDriversUseCase'


export class FindAllDriversController {
  constructor(
    private findAllDriversUseCase: FindAllDriversUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page = parseInt(request.query.page as string)
      const limit = parseInt(request.query.limit as string)
      const data = await this.findAllDriversUseCase.execute(page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
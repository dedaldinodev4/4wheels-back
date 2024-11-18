import { Request, Response } from 'express'
import { FindAllUsersUseCase } from './FindAllUsersUseCase'


export class FindAllUsersController {
  constructor(
    private findAllUsersUseCase: FindAllUsersUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page: number = parseInt(request.query.page as string)
      const limit: number = parseInt(request.query.limit as string)
      
      const data = await this.findAllUsersUseCase.execute(page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
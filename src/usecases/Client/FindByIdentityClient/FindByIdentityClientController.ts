import { Request, Response } from 'express'
import {
  FindByIdentityClientUseCase
} from './FindByIdentityClientUseCase'


export class FindByIdentityClientController {
  constructor(
    private findByIdentityClientUseCase: FindByIdentityClientUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { identity } = request.params
      const data = await this.findByIdentityClientUseCase.execute(identity)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
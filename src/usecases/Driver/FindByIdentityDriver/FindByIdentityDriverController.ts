import { Request, Response } from 'express'
import {
  FindByIdentityDriverUseCase
} from './FindByIdentityDriverUseCase'


export class FindByIdentityDriverController {
  constructor(
    private findByIdentityDriverUseCase: FindByIdentityDriverUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { identity } = request.params
      const data = await this.findByIdentityDriverUseCase.execute(identity)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
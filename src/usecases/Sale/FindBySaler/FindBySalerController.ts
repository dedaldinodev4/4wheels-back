import { Request, Response } from 'express'
import { 
  FindBySalerUseCase 
} from './FindBySalerUseCase'


export class FindBySalerController {
  constructor(
    private findBySalerUseCase: FindBySalerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page = parseInt(request.query.page as string);
      const limit = parseInt(request.query.limit as string);
      const saler_id = request.query.saler_id as string;
      
      const data = await this.findBySalerUseCase.execute(saler_id, page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
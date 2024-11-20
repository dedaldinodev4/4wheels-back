import { Request, Response } from 'express'
import { 
  FindByStatusSaleUseCase 
} from './FindByStatusSaleUseCase'


export class FindByStatusSaleController {
  constructor(
    private findByStatusSaleUseCase: FindByStatusSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page = parseInt(request.query.page as string);
      const limit = parseInt(request.query.limit as string);
      const status = request.query.status as string;
      
      const data = await this.findByStatusSaleUseCase.execute(status, page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
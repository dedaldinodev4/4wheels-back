import { Request, Response } from 'express'
import { DeleteVehicleDetailUseCase } from './DeleteVehicleDetailUseCase'


export class DeleteVehicleDetailController {
  constructor(
    private deleteVehicleDetailUseCase: DeleteVehicleDetailUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteVehicleDetailUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
import { Request, Response } from 'express'
import { DeleteVehicleUseCase } from './DeleteVehicleUseCase'


export class DeleteVehicleController {
  constructor(
    private deleteVehicleUseCase: DeleteVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteVehicleUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
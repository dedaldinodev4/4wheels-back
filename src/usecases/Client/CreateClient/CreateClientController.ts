import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'


export class CreateClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, identity,
      address, gender, walletNumber, id_user } = request.body;

    try {
      const data = await this.createClientUseCase.execute({
        name, identity,
        address, gender, walletNumber, id_user
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
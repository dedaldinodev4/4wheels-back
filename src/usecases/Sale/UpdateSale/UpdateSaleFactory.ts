import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { UpdateSaleController } from './UpdateSaleController'
import { UpdateSaleUseCase } from './UpdateSaleUseCase'


export const updateSaleFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const updateSaleUseCase = new UpdateSaleUseCase(
    prismaSaleRepository
  )
  const updateSaleController = new UpdateSaleController(
    updateSaleUseCase
  )

  return updateSaleController
}
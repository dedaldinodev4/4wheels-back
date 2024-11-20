import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { FindByStatusSaleController } from './FindByStatusSaleController'
import { FindByStatusSaleUseCase } from './FindByStatusSaleUseCase'


export const findByStatusSaleFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const findByStatusSaleUseCase = new FindByStatusSaleUseCase(
    prismaSaleRepository
  )
  const findByStatusSaleController = new FindByStatusSaleController(
    findByStatusSaleUseCase
  )

  return findByStatusSaleController
}
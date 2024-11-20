import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { FindAllSalesController } from './FindAllSalesController'
import { FindAllSalesUseCase } from './FindAllSalesUseCase'


export const findAllSalesFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const findAllSalesUseCase = new FindAllSalesUseCase(
    prismaSaleRepository
  )
  const findAllSalesController = new FindAllSalesController(
    findAllSalesUseCase
  )

  return findAllSalesController
}
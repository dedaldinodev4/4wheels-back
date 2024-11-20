import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { FindBySalerController } from './FindBySalerController'
import { FindBySalerUseCase } from './FindBySalerUseCase'


export const findBySalerFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const findBySalerUseCase = new FindBySalerUseCase(
    prismaSaleRepository
  )
  const findBySalerController = new FindBySalerController(
    findBySalerUseCase
  )

  return findBySalerController
}
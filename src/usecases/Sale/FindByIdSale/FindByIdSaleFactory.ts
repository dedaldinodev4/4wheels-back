import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { 
  FindByIdSaleController 
} from './FindByIdSaleController'
import { 
  FindByIdSaleUseCase 
} from './FindByIdSaleUseCase'


export const findByIdSaleFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const findByIdSaleUseCase = new FindByIdSaleUseCase(
    prismaSaleRepository
  )
  const findByIdSaleController = new FindByIdSaleController(
    findByIdSaleUseCase
  )

  return findByIdSaleController
}
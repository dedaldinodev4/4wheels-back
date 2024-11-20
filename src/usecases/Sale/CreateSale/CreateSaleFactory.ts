import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { 
  CreateSaleController 
} from './CreateSaleController'
import { 
  CreateSaleUseCase 
} from './CreateSaleUseCase'


export const createSaleFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const createSaleUseCase = new CreateSaleUseCase(
    prismaSaleRepository
  )
  const createSaleController = new CreateSaleController(
    createSaleUseCase
  )

  return createSaleController
}
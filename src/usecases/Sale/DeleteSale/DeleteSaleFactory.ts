import {
  PrismaSaleRepository
} from '../../../repositories/implementations/prisma/PrismaSaleRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteSaleController } from './DeleteSaleController'
import { DeleteSaleUseCase } from './DeleteSaleUseCase'


export const deleteSaleFactory = () => {
  const prismaSaleRepository = new PrismaSaleRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteSaleUseCase = new DeleteSaleUseCase(
    prismaSaleRepository,
    prismaUserRepository
  )
  const deleteSaleController = new DeleteSaleController(
    deleteSaleUseCase
  )

  return deleteSaleController
}
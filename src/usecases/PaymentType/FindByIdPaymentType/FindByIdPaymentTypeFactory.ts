import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { 
  FindByIdPaymentTypeController 
} from './FindByIdPaymentTypeController'
import { 
  FindByIdPaymentTypeUseCase 
} from './FindByIdPaymentTypeUseCase'


export const findByIdPaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const findByIdPaymentTypeUseCase = new FindByIdPaymentTypeUseCase(
    prismaPaymentTypeRepository
  )
  const findByIdPaymentTypeController = new FindByIdPaymentTypeController(
    findByIdPaymentTypeUseCase
  )

  return findByIdPaymentTypeController
}
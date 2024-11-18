import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { 
  CreatePaymentTypeController 
} from './CreatePaymentTypeController'
import { 
  CreatePaymentTypeUseCase 
} from './CreatePaymentTypeUseCase'


export const createPaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const createPaymentTypeUseCase = new CreatePaymentTypeUseCase(
    prismaPaymentTypeRepository
  )
  const createPaymentTypeController = new CreatePaymentTypeController(
    createPaymentTypeUseCase
  )

  return createPaymentTypeController
}
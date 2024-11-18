import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { 
  FindByIdPaymentController 
} from './FindByIdPaymentController'
import { 
  FindByIdPaymentUseCase 
} from './FindByIdPaymentUseCase'


export const findByIdPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const findByIdPaymentUseCase = new FindByIdPaymentUseCase(
    prismaPaymentRepository
  )
  const findByIdPaymentController = new FindByIdPaymentController(
    findByIdPaymentUseCase
  )

  return findByIdPaymentController
}
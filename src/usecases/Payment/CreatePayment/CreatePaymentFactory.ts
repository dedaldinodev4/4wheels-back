import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { 
  CreatePaymentController 
} from './CreatePaymentController'
import { 
  CreatePaymentUseCase 
} from './CreatePaymentUseCase'


export const createPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const createPaymentUseCase = new CreatePaymentUseCase(
    prismaPaymentRepository
  )
  const createPaymentController = new CreatePaymentController(
    createPaymentUseCase
  )

  return createPaymentController
}
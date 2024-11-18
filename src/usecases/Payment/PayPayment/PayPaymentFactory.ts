import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { 
  PayPaymentController 
} from './PayPaymentController'
import { 
  PayPaymentUseCase 
} from './PayPaymentUseCase'


export const payPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const payPaymentUseCase = new PayPaymentUseCase(
    prismaPaymentRepository
  )
  const payPaymentController = new PayPaymentController(
    payPaymentUseCase
  )

  return payPaymentController
}
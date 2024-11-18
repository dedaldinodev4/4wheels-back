import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { FindByStatusPaymentController } from './FindByStatusPaymentController'
import { FindByStatusPaymentUseCase } from './FindByStatusPaymentUseCase'


export const findByStatusPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const findByStatusPaymentUseCase = new FindByStatusPaymentUseCase(
    prismaPaymentRepository
  )
  const findByStatusPaymentController = new FindByStatusPaymentController(
    findByStatusPaymentUseCase
  )

  return findByStatusPaymentController
}
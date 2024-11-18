import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { UpdatePaymentController } from './UpdatePaymentController'
import { UpdatePaymentUseCase } from './UpdatePaymentUseCase'


export const updatePaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const updatePaymentUseCase = new UpdatePaymentUseCase(
    prismaPaymentRepository
  )
  const updatePaymentController = new UpdatePaymentController(
    updatePaymentUseCase
  )

  return updatePaymentController
}
import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeletePaymentController } from './DeletePaymentController'
import { DeletePaymentUseCase } from './DeletePaymentUseCase'


export const deletePaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deletePaymentUseCase = new DeletePaymentUseCase(
    prismaPaymentRepository,
    prismaUserRepository
  )
  const deletePaymentController = new DeletePaymentController(
    deletePaymentUseCase
  )

  return deletePaymentController
}
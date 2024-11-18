import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeletePaymentTypeController } from './DeletePaymentTypeController'
import { DeletePaymentTypeUseCase } from './DeletePaymentTypeUseCase'


export const deletePaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deletePaymentTypeUseCase = new DeletePaymentTypeUseCase(
    prismaPaymentTypeRepository,
    prismaUserRepository
  )
  const deletePaymentTypeController = new DeletePaymentTypeController(
    deletePaymentTypeUseCase
  )

  return deletePaymentTypeController
}
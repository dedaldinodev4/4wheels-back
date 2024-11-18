import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { UpdatePaymentTypeController } from './UpdatePaymentTypeController'
import { UpdatePaymentTypeUseCase } from './UpdatePaymentTypeUseCase'


export const updatePaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const updatePaymentTypeUseCase = new UpdatePaymentTypeUseCase(
    prismaPaymentTypeRepository
  )
  const updatePaymentTypeController = new UpdatePaymentTypeController(
    updatePaymentTypeUseCase
  )

  return updatePaymentTypeController
}
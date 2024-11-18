import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { FindAllPaymentTypesController } from './FindAllPaymentTypesController'
import { FindAllPaymentTypesUseCase } from './FindAllPaymentTypesUseCase'


export const findAllPaymentTypesFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const findAllPaymentTypesUseCase = new FindAllPaymentTypesUseCase(
    prismaPaymentTypeRepository
  )
  const findAllPaymentTypesController = new FindAllPaymentTypesController(
    findAllPaymentTypesUseCase
  )

  return findAllPaymentTypesController
}
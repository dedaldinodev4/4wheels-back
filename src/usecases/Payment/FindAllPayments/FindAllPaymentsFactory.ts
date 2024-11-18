import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { FindAllPaymentsController } from './FindAllPaymentsController'
import { FindAllPaymentsUseCase } from './FindAllPaymentsUseCase'


export const findAllPaymentsFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const findAllPaymentsUseCase = new FindAllPaymentsUseCase(
    prismaPaymentRepository
  )
  const findAllPaymentsController = new FindAllPaymentsController(
    findAllPaymentsUseCase
  )

  return findAllPaymentsController
}
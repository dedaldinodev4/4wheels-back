import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { FindByStatusInvoiceController } from './FindByStatusInvoiceController'
import { FindByStatusInvoiceUseCase } from './FindByStatusInvoiceUseCase'


export const findByStatusInvoiceFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const findByStatusInvoiceUseCase = new FindByStatusInvoiceUseCase(
    prismaInvoiceRepository
  )
  const findByStatusInvoiceController = new FindByStatusInvoiceController(
    findByStatusInvoiceUseCase
  )

  return findByStatusInvoiceController
}
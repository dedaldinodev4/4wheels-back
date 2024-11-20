import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { FindAllInvoicesController } from './FindAllInvoicesController'
import { FindAllInvoicesUseCase } from './FindAllInvoicesUseCase'


export const findAllInvoicesFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const findAllInvoicesUseCase = new FindAllInvoicesUseCase(
    prismaInvoiceRepository
  )
  const findAllInvoicesController = new FindAllInvoicesController(
    findAllInvoicesUseCase
  )

  return findAllInvoicesController
}
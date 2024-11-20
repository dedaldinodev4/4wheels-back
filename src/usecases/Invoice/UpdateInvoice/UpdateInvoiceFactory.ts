import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { UpdateInvoiceController } from './UpdateInvoiceController'
import { UpdateInvoiceUseCase } from './UpdateInvoiceUseCase'


export const updateInvoiceFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const updateInvoiceUseCase = new UpdateInvoiceUseCase(
    prismaInvoiceRepository
  )
  const updateInvoiceController = new UpdateInvoiceController(
    updateInvoiceUseCase
  )

  return updateInvoiceController
}
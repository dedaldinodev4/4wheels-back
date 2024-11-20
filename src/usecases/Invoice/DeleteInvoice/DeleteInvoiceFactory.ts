import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteInvoiceController } from './DeleteInvoiceController'
import { DeleteInvoiceUseCase } from './DeleteInvoiceUseCase'


export const deleteInvoiceFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteInvoiceUseCase = new DeleteInvoiceUseCase(
    prismaInvoiceRepository,
    prismaUserRepository
  )
  const deleteInvoiceController = new DeleteInvoiceController(
    deleteInvoiceUseCase
  )

  return deleteInvoiceController
}
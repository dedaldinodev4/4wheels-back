import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { 
  CreateInvoiceController 
} from './CreateInvoiceController'
import { 
  CreateInvoiceUseCase 
} from './CreateInvoiceUseCase'


export const createInvoiceFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const createInvoiceUseCase = new CreateInvoiceUseCase(
    prismaInvoiceRepository
  )
  const createInvoiceController = new CreateInvoiceController(
    createInvoiceUseCase
  )

  return createInvoiceController
}
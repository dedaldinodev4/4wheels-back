import {
  PrismaInvoiceRepository
} from '../../../repositories/implementations/prisma/PrismaInvoiceRepository'
import { 
  FindByIdInvoiceController 
} from './FindByIdInvoiceController'
import { 
  FindByIdInvoiceUseCase 
} from './FindByIdInvoiceUseCase'


export const findByIdInvoiceFactory = () => {
  const prismaInvoiceRepository = new PrismaInvoiceRepository();
  const findByIdInvoiceUseCase = new FindByIdInvoiceUseCase(
    prismaInvoiceRepository
  )
  const findByIdInvoiceController = new FindByIdInvoiceController(
    findByIdInvoiceUseCase
  )

  return findByIdInvoiceController
}
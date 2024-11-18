import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { FindByIdDriverController } from './FindByIdDriverController'
import { FindByIdDriverUseCase } from './FindByIdDriverUseCase'


export const findByIdDriverFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const findByIdDriverUseCase = new FindByIdDriverUseCase(
    prismaDriverRepository
  )
  const findByIdDriverController = new FindByIdDriverController(
    findByIdDriverUseCase
  )

  return findByIdDriverController
}
import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { CreateDriverController } from './CreateDriverController'
import { CreateDriverUseCase } from './CreateDriverUseCase'


export const createDriverFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const createDriverUseCase = new CreateDriverUseCase(
    prismaDriverRepository
  )
  const createDriverController = new CreateDriverController(
    createDriverUseCase
  )

  return createDriverController
}
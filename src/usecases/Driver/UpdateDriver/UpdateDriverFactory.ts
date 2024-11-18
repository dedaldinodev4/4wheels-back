import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { UpdateDriverController } from './UpdateDriverController'
import { UpdateDriverUseCase } from './UpdateDriverUseCase'


export const updateDriverFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const updateDriverUseCase = new UpdateDriverUseCase(
    prismaDriverRepository
  )
  const updateDriverController = new UpdateDriverController(
    updateDriverUseCase
  )

  return updateDriverController
}
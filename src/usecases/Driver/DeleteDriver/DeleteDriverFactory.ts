import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteDriverController } from './DeleteDriverController'
import { DeleteDriverUseCase } from './DeleteDriverUseCase'


export const deleteDriverFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteDriverUseCase = new DeleteDriverUseCase(
    prismaDriverRepository,
    prismaUserRepository
  )
  const deleteDriverController = new DeleteDriverController(
    deleteDriverUseCase
  )

  return deleteDriverController
}
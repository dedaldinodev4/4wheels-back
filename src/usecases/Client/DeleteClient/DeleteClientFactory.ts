import {
  PrismaClientRepository
} from '../../../repositories/implementations/prisma/PrismaClientRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteClientController } from './DeleteClientController'
import { DeleteClientUseCase } from './DeleteClientUseCase'


export const deleteClientFactory = () => {
  const prismaClientRepository = new PrismaClientRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteClientUseCase = new DeleteClientUseCase(
    prismaClientRepository,
    prismaUserRepository
  )
  const deleteClientController = new DeleteClientController(
    deleteClientUseCase
  )

  return deleteClientController
}
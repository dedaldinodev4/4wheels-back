import { prisma } from "../../../lib/prisma";
import { IUserRequest, IUser, IUpdateUser, IUserCostum } from "../../../dtos/User";
import { IUserRepository } from "../../IUserRepository";
import { hashPassword } from "../../../utils/auth";
import { resultPaginated } from "../../../helpers/pagination";
import { IResultPaginated } from "../../../dtos/Pagination";


export class PrismaUserRepository implements IUserRepository {
  private repository = prisma.user;

  async findById(id: string): Promise<IUserCostum | null> {
    const user = await this.repository.findFirst(
      {
        where: { id },
        select: {
          id: true,
          email: true,
          password: false,
          username: true,
          role: true,
          created_at: true,
          status: true,
          updated_at: true
        }
      });

    return user ?? null;
  }

  async findByEmail(email: string): Promise<IUserCostum | null> {
    const user = await this.repository.findFirst(
      {
        where: { email },
        select: {
          id: true,
          email: true,
          password: false,
          username: true,
          role: true,
          created_at: true,
          status: true,
          updated_at: true
        }
      });

    return user ?? null;
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const users = await this.repository.findMany({
      select: {
        id: true,
        email: true,
        password: false,
        username: true,
        role: true,
        created_at: true,
        status: true,
        updated_at: true
      }
    });
    const result = await resultPaginated(users, page, perPage)
    return result;
  }


  async create(user: IUserRequest): Promise<IUserCostum> {
    const { username, password, email, role } = user;
    const createUser = await this.repository.create({
      data: {
        username,
        email,
        role,
        password: hashPassword(password)
      }
    })
    return createUser;
  }


  async update(id: string, user: IUpdateUser): Promise<IUser> {
    const userUpdate = await this.repository.update({
      data: user,
      where: {
        id
      }
    })

    return userUpdate;
  }

  async delete(id: string, user: string): Promise<void> {
    const userDelete = await this.repository.update({
      data: {
        status: false
      },
      where: {
        id
      }
    })
  }

}
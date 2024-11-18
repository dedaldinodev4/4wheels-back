import jwt from 'jsonwebtoken'
import { prisma } from "../../../lib/prisma";
import {
  ICurrentUser,
  ISignInRequest,
  IAuthRequest, IUpdateCredentialsRequest
} from "../../../dtos/Auth";
import { IAuthRepository } from "../../IAuthRepository";
import { checkUnEncryptedPasswordIsValid, hashPassword } from '../../../utils/auth';
import { IUser, type IUserCostum } from '../../../dtos/User';


export class PrismaAuthRepository implements IAuthRepository {
  private repository = prisma.user;


  async signIn(credentials: ISignInRequest): Promise<ICurrentUser | Error> {
    const { data, password } = credentials

    const user = await this.repository.findFirst(
    {
      where: { 
        OR: [
          { email : data },
          { username: data },
        ],
        status: true
      }
    });

    if (user) {
      if (checkUnEncryptedPasswordIsValid(password, user.password)) {

        const userCurrent: IAuthRequest = {
          id: user.id,
          email: user.email,
          status: user.status,
          username: user.username
        }

        const token = jwt.sign(
          { user: userCurrent },
          process.env.JWT_KEY ?? 'secret',
          { expiresIn: "30d" }
        );

        return {
          user: userCurrent,
          token
        }
      }
    }
    return new Error('Usuário ou Senha inválido.');
  }

  async updateCredentials(id: string, credentials: IUpdateCredentialsRequest):
    Promise<IUser | Error> {
    const { password, username } = credentials;
    const userUpdate = await this.repository.update({
      data: {
        username: username,
        password: hashPassword(password)
      },
      where: {
        id
      }
    })

    return userUpdate;
  }

}
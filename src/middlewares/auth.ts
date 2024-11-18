import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IExpressRequest } from '../dtos/ExpressDTO';

//* ensuredAuthenticated *//

export const ensuredAuthenticated = () => {

  return async (request: IExpressRequest, response: Response, next: NextFunction) => {

    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: 'Token is missing' });
    }
    const [, token] = authHeaders.split(' ');


    try {
      const data = verify(token, process.env.JWT_KEY) as {
        user: {
          email: string;
          username: string;
          id: string;
          status: boolean;
        }
      };

      const { user } = data;
      request.user = user
      return next();
    } catch (err) {
      return response.status(401).json({ error: err })
    }
  }




}
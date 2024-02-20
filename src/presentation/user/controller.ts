import { Request, Response } from 'express';
import {
  CustomError,
} from '../../domain';
import { GetUsers } from '../../domain/use-cases/user/get-all-user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';
import { GetUserById } from '../../domain/use-cases/user/get-user-by-id.use-case';

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = (request: Request, response: Response) => {
    new GetUsers(this.userRepository)
      .execute()
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  getUserById = (request: Request, response: Response) => {
    new GetUserById(this.userRepository)
      .execute(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
}

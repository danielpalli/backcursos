import { Request, Response } from 'express';
import {
  CustomError,
  DeleteUser,
  UpdateUser,
  GetUsers,
  GetUserById,
  UserRepository,
} from '../../domain';

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

  updateUser = (request: Request, response: Response) => {
    new UpdateUser(this.userRepository)
      .execute(request.params.id, request.body)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  deleteUser = (request: Request, response: Response) => {
    new DeleteUser(this.userRepository)
      .execute(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
}

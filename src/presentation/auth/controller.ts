import { Request, Response } from 'express';
import {
  AuthRepository,
  CustomError,
  LoginUser, LoginUserRequest,
  RegisterUser,
  RegisterUserRequest,
} from '../../domain';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (request: Request, response: Response) => {
    const [error, registerUserDto] = RegisterUserRequest.create(request.body);
    if (error) return response.status(400).json({ message: error });

    new RegisterUser(this.authRepository)
      .execute(registerUserDto!)
      .then((data) => response.status(201).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  loginUser = (request: Request, response: Response) => {
    const [error, loginUserDto] = LoginUserRequest.create(request.body);
    if (error) return response.status(401).json({ message: error });

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
}

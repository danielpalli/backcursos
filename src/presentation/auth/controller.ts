import { Request, Response } from 'express';
import {
  AuthRepository,
  CustomError,
  LoginUser,
  RegisterUser,
  RegisterUserDto,
} from '../../domain';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (request: Request, response: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(request.body);
    if (error) return response.status(400).json({ message: error });

    new RegisterUser(this.authRepository)
      .execute(registerUserDto!)
      .then((data) => response.status(201).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  loginUser = (request: Request, response: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(request.body);
    if (error) return response.status(400).json({ message: error });

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
}

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

  private handleError = (error: unknown, response: Response) => {
    if (error instanceof CustomError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    return response.status(500).json({ message: 'Internal server error' });
  };

  registerUser = (request: Request, response: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(request.body);
    if (error) return response.status(400).json({ message: error });

    new RegisterUser(this.authRepository)
      .execute(registerUserDto!)
      .then((data) => response.status(201).json(data))
      .catch((error) => this.handleError(error, response));
  };

  loginUser = (request: Request, response: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(request.body);
    if (error) return response.status(400).json({ message: error });

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => response.status(200).json(data))
      .catch((error) => this.handleError(error, response));
  };
}

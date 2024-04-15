import { BcryptAdapter } from '../../config';
import { UserModel } from '../../data';
import {
  AuthDataSource, CompareFunction,
  CustomError, HashFunction,
  LoginUserRequest,
  RegisterUserRequest,
  UserEntity,
} from '../../domain';
import { UserMapper } from '../';
export class AuthDataSourceImpl implements AuthDataSource {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
  ) {}
  async register(registerUserDto: RegisterUserRequest): Promise<UserEntity> {
    const { firstName, lastName, email, password } = registerUserDto;

    try {
      const exists = await UserModel.findOne({ email });
      if (exists) throw CustomError.badRequest('El Usuario ya se encuentra registrado');

      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password: this.hashPassword(password),
      });

      await user.save();

      return UserMapper.objectToEntity(user);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
  async login(loginUserDto: LoginUserRequest): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    try {
      const user = await UserModel.findOne({ email });
      if (!user) throw CustomError.unauthorized('Credenciales inválidas');

      const isMatching = this.comparePassword(password, user.password);
      if (!isMatching) throw CustomError.unauthorized('Credenciales inválidas');

      return UserMapper.objectToEntity(user);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
}

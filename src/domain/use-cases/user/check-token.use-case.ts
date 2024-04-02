import { Request } from 'express';
import { JwtAdapter } from '../../../config';
import { CustomError } from '../../errors/custom.error';
import { UserRepository } from '../../repositories/user.repository';
import { UserEntity } from '../../entities/user.entity';
import { UserToken } from '../../interfaces/user-token.interface';

type SignToken = (payload: Object, expiresIn: string) => Promise<string | null>;

interface CheckTokenUseCase {
  execute(user: UserEntity): Promise<UserToken>;
}

export class CheckToken implements CheckTokenUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken
  ) {}

  async execute(user: UserEntity): Promise<UserToken> {
    const { id } = user;
    const usuario = await this.userRepository.getUserById(id);
    const token = await this.signToken({ id }, '2h');
    if (!token) throw CustomError.internalServer('Error generating token');
    return {
      token,
      user: {
        id: usuario.id,
        email: usuario.email,
        firstName: usuario.firstName,
        lastName: usuario.lastName,
      },
    };
  }
}

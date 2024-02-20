import { UserEntity } from '../../entities/user.entity';
import { CustomError } from '../../errors/custom.error';
import { UserRepository } from '../../repositories/user.repository';

interface GetUserByIdUseCase {
  execute(id: string): Promise<UserEntity>;
}

export class GetUserById implements GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<UserEntity> {
    const users = await this.userRepository.getUserById(id);
    return users;
  }
}

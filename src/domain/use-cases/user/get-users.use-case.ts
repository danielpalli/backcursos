import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

interface GetUsersUseCase {
  execute(): Promise<UserEntity[]>;
}

export class GetUsers implements GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    const users = await this.userRepository.getUsers();
    return users;
  }
}

import { CustomError } from '../errors/custom.error';

export class UserEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public role: string[],
    public emailValidated: boolean,
    public active: boolean,
    public avatar?: string
  ) {}
}

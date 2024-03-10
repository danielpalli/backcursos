export class UserEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public role: string[],
    public active: boolean,
    public avatar?: string
  ) {}
}

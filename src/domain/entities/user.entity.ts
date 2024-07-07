export class UserEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,
    public birthDate: Date,
    public country: string,
    public role: string[],
    public isActive: boolean,
    public avatar: string,
    public lastConnection: Date,
  ) {}
}

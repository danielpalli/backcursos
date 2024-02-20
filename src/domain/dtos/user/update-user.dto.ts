export class UpdateUserDto {
  private constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { firstName, lastName, email, password } = object;

    if (!firstName) return ['First name is required'];
    if (!lastName) return ['Last name is required'];
    if (!email) return ['Email is required'];
    if (!password) return ['Password is required'];

    return [
      undefined,
      new UpdateUserDto(firstName, lastName, email.toLowerCase(), password),
    ];
  }
}

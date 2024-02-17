export class RegisterUserDto {
  private constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { firstName, lastName, email, password } = object;

    if (!firstName) return ['First name is required'];
    if (!lastName) return ['Last name is required'];
    if (!email) return ['Email is required'];
    if (!password) return ['Password is required'];

    return [
      undefined,
      new RegisterUserDto(firstName, lastName, email.toLowerCase(), password),
    ];
  }
}

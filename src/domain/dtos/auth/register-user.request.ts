export class RegisterUserRequest {
  private constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserRequest?] {
    const { firstName, lastName, email, password } = object;

    if (!firstName) return ['First name is required'];
    if (firstName.length < 2) return ['First name is too short'];
    if (!lastName) return ['Last name is required'];
    if (!email) return ['Email is required'];
    if (!password) return ['Password is required'];

    return [
      undefined,
      new RegisterUserRequest(firstName, lastName, email.toLowerCase(), password),
    ];
  }
}

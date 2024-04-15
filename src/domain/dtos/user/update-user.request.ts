export class UpdateUserRequest {
  private constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public role: string[],
    public isActive: boolean,
    public avatar: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateUserRequest?] {
    const { firstName, lastName, email, password, newPassword, role, isActive, avatar } = object;

    if (!firstName) return ['First name is required'];
    if (!lastName) return ['Last name is required'];
    if (!email) return ['Email is required'];
    if (!password) return ['Password is required'];
    if (newPassword && newPassword.length < 6) return ['New password must be at least 6 characters long'];
    if (role && role.length === 0) return ['Role must have at least one element'];
    if (role && role.length > 0 && role[0] === 'admin') return ['You cannot change the role to admin'];
    if (isActive === undefined) return ['Status is required'];
    if (avatar && avatar.length === 0) return ['Avatar is required'];

    return [
      undefined,
      new UpdateUserRequest(firstName, lastName, email.toLowerCase(), password, role, isActive, avatar),
    ];
  }
}

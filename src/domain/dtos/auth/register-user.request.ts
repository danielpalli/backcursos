export class RegisterUserRequest {
  private constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,
    public birthdate: Date,
    public country: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserRequest?] {
    const { firstName, lastName, email, password, phone, birthDate, country } = object;

    if (!firstName) return ['El nombre es requerido'];
    if (firstName.length < 2) return ['El nombre debe tener al menos 2 caracteres'];
    if (!lastName) return ['El apellido es requerido'];
    if (!email) return ['El correo electrónico es requerido'];
    if (!password) return ['La contraseña es requerida'];
    if (password.length < 6) return ['La contraseña debe tener al menos 6 caracteres'];
    if (!phone) return ['El teléfono es requerido'];
    if (!birthDate) return ['La fecha de nacimiento es requerida'];
    if (!country) return ['El país es requerido'];

    return [
      undefined,
      new RegisterUserRequest(
        firstName,
        lastName,
        email.toLowerCase(),
        password,
        phone,
        new Date(birthDate),
        country
      ),
    ];
  }
}

export class EmailIsAlreadyTaken extends Error {
  constructor(email: string) {
    super(`Email '${email}' is already taken.`);
    this.name = 'EmailIsAlreadyTaken';
    Object.setPrototypeOf(this, EmailIsAlreadyTaken.prototype);
  }
}

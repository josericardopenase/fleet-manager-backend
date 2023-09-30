export class EmailIsAlreadyTaken extends Error {
  constructor(email: string) {
    super(`Email '${email}' is already taken.`);
    this.name = 'EmailIsAlreadyTaken';
    // Set the prototype explicitly to ensure instanceof works correctly
    Object.setPrototypeOf(this, EmailIsAlreadyTaken.prototype);
  }
}

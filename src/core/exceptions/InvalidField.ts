export class InvalidField extends Error {
  constructor(field : string) {
    super(`<${field}>: has invalid value`);
    this.name = `InvalidField<${field}>`;
    Object.setPrototypeOf(this, InvalidField.prototype);
  }
}

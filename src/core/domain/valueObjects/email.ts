import { ValueObject } from "../../common/baseValueObject";
import { InvalidField } from "../../exceptions/InvalidField";

export class Email implements ValueObject<string> {
  private readonly emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;

  private constructor(readonly value: string) {
    this.value = value;
    this.validate(value);
  }

  validate(value: string): void {
    if (!this.emailRegex.test(value)) 
      throw new InvalidField('email')
  }

  static create(value: string) {
    return new Email(value);
  }
}

import { ValueObject } from "../../common/baseValueObject";
import { InvalidField } from "../../exceptions/InvalidField";

export class HexColor implements ValueObject<string> {
  private readonly hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  private constructor(readonly value: string) {
    this.value = value;
    this.validate(value);
  }

  validate(value: string): void {
    // Regular expression to validate a hexadecimal color code

    if (!this.hexColorRegex.test(value)) {
      throw new InvalidField('hexColor');
    }
  }

  static create(value: string): HexColor {
    return new HexColor(value);
  }
}

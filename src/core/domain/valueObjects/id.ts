import {ValueObject} from "../../common/baseValueObject";
import {InvalidField} from "../../exceptions/InvalidField";

export class Id implements ValueObject<number>{
    private constructor(readonly value : number){
        this.value = value
        this.validate(value)
    }

    static create(value : number){
        return new Id(value)
    }

    validate(value : number) : void{
        if(!value || value < 0)
            throw new InvalidField('id')
    }
}

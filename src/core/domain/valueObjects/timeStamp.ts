
import { ValueObject } from "../../common/baseValueObject" 
import {InvalidField} from "../../exceptions/InvalidField"

export class TimeStamp implements ValueObject<Date>{
    private constructor(readonly value : Date){
        this.value = value
        this.validate(value)
    }

    static create(value : Date){
        return new TimeStamp(value)
    }

    static now(){
        return new TimeStamp(new Date())
    }

    validate(value : Date) : void{
    }
}

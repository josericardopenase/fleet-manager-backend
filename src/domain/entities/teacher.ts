import {Car} from "./car";
import {User} from "./user";

export class Teacher extends User{
    constructor(
                public id : number,
                public firstName : string, 
                public lastName : string, 
                public password : string, 
                public email : string,
                public car : Car
               ){
                    super(id, firstName, lastName, password, email)
                    this.car = car;
    }


    setCar(car : Car){
        this.car = car;
    }

}

import {DrivingSchool} from "./drivingSchool";
import {User} from "./user";

export class Owner extends User{
    constructor(
                public id : number,
                public firstName : string, 
                public lastName : string, 
                public password : string, 
                public email : string,
                public drivingSchool : DrivingSchool
               ){
                    super(id, firstName, lastName, password, email)
    }
}

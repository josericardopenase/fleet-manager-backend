import {User} from "./user";

export class Secretary extends User{
    constructor(
                public id : number,
                public firstName : string, 
                public lastName : string, 
                public password : string, 
                public email : string,
               ){
                    super(id, firstName, lastName, password, email)
    }
}

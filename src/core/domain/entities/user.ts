import {Email} from "../valueObjects/email";
import {Id} from "../valueObjects/id";

export class User{
    private readonly _id : Id
    private _email : Email
    private readonly _drivingSchoolId : Id

    constructor(
                id : number,
                public readonly firstName : string, 
                public readonly lastName : string, 
                public password : string, 
                email : string,
                drivingSchoolId : number,
                public is_owner : boolean,
                public is_teacher : boolean,
                public is_secretary: boolean
    ){
        this._id = Id.create(id)
        this._email = Email.create(email)
        this._drivingSchoolId = Id.create(drivingSchoolId)
    }

    get id(){
        return this._id.value
    }

    get email(){
        return this._email.value
    }

    updateEmail(email : string){
        this._email = Email.create(email);
    }

    get drivingSchoolId(){
        return this._drivingSchoolId.value
    }
}

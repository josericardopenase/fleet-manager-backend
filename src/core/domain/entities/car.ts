import {Id} from "../valueObjects/id";

export class Car{

    private readonly _id: Id
    public readonly  _teacherId : Id

    public constructor(
        id : number,
        public model : string,
        public plateNumber : string,
        public drivingSchoolId : number,
        teacherId ?: number,
    ){
        this._id = Id.create(id);
        this._teacherId = Id.create(teacherId)
    }

    get id(){
        return this._id.value
    }

    get teacherId(){
        return this._teacherId.value
    }
}

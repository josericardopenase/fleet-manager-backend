import {Id} from "../valueObjects/id";
import {TimeStamp} from "../valueObjects/timeStamp";

export class Bill{

    private readonly _id : Id;
    private readonly _timeStamp : TimeStamp;

    constructor(
        id : number,
        public amount : number,
        timeStamp : TimeStamp
    ){
        this._id = Id.create(id)
        this._timeStamp = TimeStamp.now()
    }

    get id(){
        return this._id.value
    }

    get timeStamp(){
        return this._timeStamp.value
    }
}


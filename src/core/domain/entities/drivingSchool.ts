import {HexColor} from "../valueObjects/hexColor";
import {Id} from "../valueObjects/id";

export class DrivingSchool{

    private readonly _id : Id
    private _hexColor : HexColor
    
    constructor(
        id : number,
        public readonly name : string,
        public readonly logo : string,
        color : string
    ){
        this._id = Id.create(id);
        this._hexColor = HexColor.create(color)
    }

    get id(){
        return this._id.value
    }

    get color(){
        return this._hexColor.value
    }

    updateColor(color : string){
        this._hexColor = HexColor.create(color)
    }


}

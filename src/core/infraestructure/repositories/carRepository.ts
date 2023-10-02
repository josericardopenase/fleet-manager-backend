import {BaseRepository} from "../../common/baseRepository";
import {Car} from "../../domain/entities/car";

export interface CarRepository extends BaseRepository<Car>{
    existPlateNumber(plateNumber : string) : Promise<Boolean>
}

import AuthAdapter from "../../infraestructure/adapters/authAdapter";
import {CarRepository} from "../../infraestructure/repositories/carRepository";
import {Car} from "../../domain/entities/car";
import {NotAuthorized} from "../../exceptions/NotAuthorized";

export class AddCar{
    constructor(
        private auth : AuthAdapter,
        private carRepository: CarRepository,
    ){}

    async execute(model : string, plateNumber : string){
        const user = await this.auth.getUser()

        if(!user || !user.is_owner)
            throw new NotAuthorized()

        if(this.carRepository.existPlateNumber(plateNumber))
            throw new Error("This car already exists")

        const car = new Car(null, model, plateNumber, user.drivingSchoolId, null);
        const response = await this.carRepository.save(car)
        return response
    }
}

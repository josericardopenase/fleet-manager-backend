import AuthAdapter from "../../infraestructure/adapters/authAdapter";
import {CarRepository} from "../../infraestructure/repositories/carRepository";

import {NotAuthorized} from "../../exceptions/NotAuthorized";


export class AddCar{
    constructor(
        private auth : AuthAdapter,
        private carRepository: CarRepository,
    ){}

    async execute(id : number){
        const user = await this.auth.getUser()

        if(!user || !user.is_owner)
            throw new NotAuthorized()

        if(!this.carRepository.getById(id))
            throw new Error("This car does not exists")

        const response = await this.carRepository.delete(id)
        return response
    }
}

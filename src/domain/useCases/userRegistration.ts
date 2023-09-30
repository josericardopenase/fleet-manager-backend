import RegisterForm from "../dtos/registerForm";
import {User} from "../entities/user";
import {EmailIsAlreadyTaken} from "../exceptions/EmailIsAlreadyTaken";
import {UserRepository} from "../repositories/userRepository";


export class userRegistration{

    constructor(
        private repository : UserRepository,
        private encrypter : EncrypterAdapter
    ){}

    execute(data : RegisterForm){
        if(this.repository.isEmailTaken(data.email)) 
            throw new EmailIsAlreadyTaken(data.email)

        const password = this.encrypter.encrypt(data.password)
        const user = new User(null, data.email, data.firstName, data.lastName, password)
        this.repository.save(user)
        return user
    }
}

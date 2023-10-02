import {StorageAdapter} from "../../infraestructure/adapters/storageAdapter";
import RegisterForm from "../dtos/registerForm.dto";
import {EmailIsAlreadyTaken} from "../../exceptions/EmailIsAlreadyTaken";
import {DrivingSchoolRepository} from "../../infraestructure/repositories/drivingSchoolRepository";
import {UserRepository} from "../../infraestructure/repositories/userRepository";
import {DrivingSchool} from "../../domain/entities/drivingSchool";
import {User} from "../../domain/entities/user";

export class OwnerRegistration{
    constructor(
        private userRepository : UserRepository,
        private drivingSchoolRepository: DrivingSchoolRepository,
        private encrypter : EncrypterAdapter,
        private storage : StorageAdapter,
    ){}

    async execute(data : RegisterForm){
        if(this.userRepository.isEmailTaken(data.email))            
            throw new EmailIsAlreadyTaken(data.email)

        const encryptedPassword = await this.encrypter.encrypt(data.password)
        const savedLogo = await this.storage.uploadFile(data.drivingSchool.logo, 'logo.png')

        const drivingSchool = new DrivingSchool(null, data.drivingSchool.name, savedLogo, data.drivingSchool.color)
        const drivingSchoolResponse = await this.drivingSchoolRepository.save(drivingSchool)

        const user = new User(null,  data.firstName, data.lastName,  encryptedPassword, data.email, drivingSchoolResponse.id, true, false, false)
        const userResponse = await this.userRepository.save(user)

        return userResponse
    }
}

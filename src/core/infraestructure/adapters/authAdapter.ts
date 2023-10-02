import {User} from "../../domain/entities/user"

export default interface AuthAdapter{
    isAuthenticated() : boolean
    isTeacher() : boolean
    isSecretary() : boolean
    isAdmin() : boolean
    getUser() : Promise<User | null>
}

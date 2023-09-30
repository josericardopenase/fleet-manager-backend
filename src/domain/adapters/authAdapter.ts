import {User} from "../entities/user"

export default interface AuthAdapter{
    isAuthenticated() : boolean
    isTeacher() : boolean
    isSecretary() : boolean
    isAdmin() : boolean
    getUser() : User | null
}


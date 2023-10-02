import {BaseRepository} from "../../common/baseRepository";
import {User} from "../../domain/entities/user";

export interface UserRepository extends BaseRepository<User>{
    isEmailTaken(email : string) : boolean
}

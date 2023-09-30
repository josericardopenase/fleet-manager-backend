import { Criteria } from "./criteria"

export interface BaseRepository<T>{
    getById : (id : number) =>  Promise<T>
    getAll(): Promise<T[]>
    matching(filters : Criteria<T>): Promise<T[]>
    save(user: T): Promise<void>
    delete(id: number): Promise<void>
}




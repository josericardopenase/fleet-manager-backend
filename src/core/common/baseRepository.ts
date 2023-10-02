import { Criteria } from "./criteria"

export interface BaseRepository<T>{
    getById : (id : number) =>  Promise<T>
    getAll(): Promise<T[]>
    matching(filters : Criteria<T>): Promise<T[]>
    save(user: T): Promise<T>
    update(user: T): Promise<T>
    delete(id: number): Promise<T>
}




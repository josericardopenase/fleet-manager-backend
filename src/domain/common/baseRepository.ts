import {FilterSet} from "./filterSet"

export interface BaseRepository<T>{
    getById : (id : number) =>  Promise<T>
    getAll(): Promise<T[]>
    filter(filters : FilterSet<T>): Promise<T[]>
    save(user: T): Promise<void>
    delete(id: number): Promise<void>
}




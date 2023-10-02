export interface StorageAdapter{
    uploadFile(file : string, route : string) : Promise<string>
    deleteFile(route : string) : Promise<boolean>
}

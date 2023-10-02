interface EncrypterAdapter{
    encrypt(password : string) : Promise<string>
    validate(password: string, token : string) : Promise<boolean>
}

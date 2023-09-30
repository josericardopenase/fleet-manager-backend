interface EncrypterAdapter{
    encrypt(password : string) : string
    validate(password: string, token : string) : boolean
}

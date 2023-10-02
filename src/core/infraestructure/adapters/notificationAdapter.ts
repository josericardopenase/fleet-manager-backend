interface NotificationAdapter{
    notify(userId : number, message : string) : Promise<void>
}


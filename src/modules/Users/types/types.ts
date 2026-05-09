export interface user{
    name:string
    id:number
    email:string
}
export interface postPayload{
    name:string
    password:string
    email:string
}
export interface postResponse{
    accessToken:string,
    user:user
}

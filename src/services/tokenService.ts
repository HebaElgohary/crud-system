import  cookies  from "js-cookie";
import {ENV} from "@/config/env"
const tokenKey=ENV.ACCES_TOKEN_KEY


export const tokenServices={
    setToke:(token:string,expires=1)=>{
    cookies.set(tokenKey, token,{expires,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",

    })
    }, 
    getToken:():string|null=>cookies.get(tokenKey),
    removeToken:()=>{
        cookies.remove(tokenKey)
   }


}
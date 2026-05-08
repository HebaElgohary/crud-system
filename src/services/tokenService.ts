import  cookies  from "js-cookie";
import {env as ENV} from "@/src/config/ENV"
const tokenKey=ENV.ACCES_TOKEN_KEY


export const tokenServices={
    setToken:(token:string,expires=1)=>{
    cookies.set(tokenKey, token,{expires,
    secure: ENV.APP_ENV === ENV.PROD_MODE,
    sameSite: "strict",

    })
    }, 
    getToken:():string|undefined=>cookies.get(tokenKey),
    removeToken:()=>{
        cookies.remove(tokenKey)
   }


}
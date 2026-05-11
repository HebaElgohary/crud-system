import { ComponentType } from "react"

export interface MainCardProps{
       id:number,
        title:string,
        subtitle:string,
        btn:string,
        Icon:ComponentType<{size: number, className: string}>
        iconBg:'blue'|'green'|'violet'|'warning'|'danger'
}
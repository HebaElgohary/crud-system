import { ComponentType } from "react"

export interface MainCardProps{
       id:number,
        title:string,
        subtitle:string,
        btn:string,
        Icon:ComponentType<{size: number, className: string}>
        iconBg:'blue'|'green'|'violet'|'warning'|'danger'
}

export interface PageHeadingProps{
    title:string,
    subtitle:string


}
export type formNameType='create'|'update'
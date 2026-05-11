import { MainCardProps } from "../types/types";
import { User,Users,    Edit,   Trash } from "../assets/icons/icons";

export const  cardsData:MainCardProps[]=[
    {
        id:1,
        title:'All users',
        subtitle:'View all users',
        btn:'Read all users',
        iconBg:'blue',
        Icon:Users
    },
    {
        id:2,
        title:'View user',
        subtitle:'Get a single user',
        btn:'Read one user',
        iconBg:'green',
        Icon:User

    },
    {
        id:3,
        title:'Create user',
        subtitle:'Add a new user',
         btn:'Create user',
        iconBg:'warning',
        Icon:Edit

    },
 
    {
        id:4,
        title:'Delete user',
        subtitle:'Remove a user',
         btn:'Delete user',
        iconBg:'danger',
        Icon:Trash

    },
]
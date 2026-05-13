
'user client'
import { useGetUser } from '../hooks/useGetUser'
import DetailsCard from '../../../components/molecules/DetailsCard'
export default function UserDetailsCard({id}:{id:number}) {
    const {data}=useGetUser(id)
    
  return (
    <div>
        {data && <DetailsCard data={data}/>}
    </div>
  )
}

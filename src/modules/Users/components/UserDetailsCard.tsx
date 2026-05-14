
'user client'
import { useGetUser } from '../hooks/useGetUser'
import DetailsCard from '../../../components/molecules/DetailsCard'
import { useEffect, useRef } from 'react';
import { fade } from '@/src/animations/fade';
export default function UserDetailsCard({id}:{id:number}) {
    const {data}=useGetUser(id)
      const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      fade(cardRef.current);
    }
  },[data])
    
  return (
    <div>
        {data && <DetailsCard ref={cardRef} data={data}/>}
    </div>
  )
}

'use client'
import { tableHeading } from '../../data/table'
import {Users} from '../../assets/icons/icons'
import FormHeading from './form/FormHeading'
import { useGetUsers } from '@/src/modules/Users/hooks/useGetUsers'
export default function UsersTable({data}) {
  return (
   <div className='flex flex-col gap-5 !p-5'>

  <FormHeading
    label='All Users'
    icon={Users}
    iconColor='blue'
    titleVariant='blue'
  />

  <div className='overflow-hidden rounded-md border border-gray-200'>

    <table className='w-full text-sm text-left'>

      <thead className='text-lg font-bold'>

        <tr>

          {tableHeading.map((heading) => (

            <th
              key={heading.key}
              scope='col'
              className='!px-6 !py-3 ds-bg-gray'
            >
              {heading.title}
            </th>

          ))}

        </tr>

      </thead>

    </table>

  </div>

</div>
  )
}

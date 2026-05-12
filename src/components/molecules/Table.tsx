'use client'
import { tableHeading } from '../../data/table'
import {Edit, Trash, Users} from '../../assets/icons/icons'
import FormHeading from './form/FormHeading'
import { useGetUsers } from '@/src/modules/Users/hooks/useGetUsers'
import {user} from '../../modules/Users/types/types'
import Icon from '../atoms/Icon'
import Button from '../atoms/Button'
export default function Table({data:users}:{data?:user[]}) {
  return (
   <div className='flex flex-col gap-5 !p-5 border border-gray-200 rounded-xl'>

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
  <tbody>

        {users && users.map((user:user) => (

          <tr key={user.id} className='bg-white  !p-3 text-center' >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className='flex flex-row !p-3'>
           <Button variant='blue' size='sm' className='!mt-1 !mx-3 rounded-lg'>View</Button>
            <Button variant='warning' size='sm' className='!mt-1 !mx-3 rounded-lg'>Edit</Button>
           <Button variant='danger' size='sm' className='!mt-1 !mx-3 rounded-lg'>Delete</Button>
            </td>

          </tr>

        ))}

      </tbody>
    </table>

  </div>

</div>
  )
}

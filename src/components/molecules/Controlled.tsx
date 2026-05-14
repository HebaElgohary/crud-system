'use client'

import React from 'react'

export default function Controlled() {
    const formRef=React.useRef<HTMLFormElement>(null)
    // const [formData,setFormData]=React.useState({
    //     name:'',
    //     email:''
    // })
//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
// console.log(e.target.value)
// setFormData({...formData,
//     [e.target.name]:e.target.value
// })
//     }
// const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
//     e.preventDefault()
//     console.log(formData)
//     setFormData({
//         name:'',
//         email:''
//     })

//     }
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formRef.current)
    const formData=new FormData(formRef.current!)
    console.log(formData.get('name'))
    const data=Object.fromEntries(formData.entries())
    console.log(data)
   
}
// const [formData, setFormData] = React.useState({
//   name: "",
//   email: "",
// });
// }
  return (
    <div className='flex gap-2 flex-col justify-center items-center bg-black h-screen'>
        <h1>Controlled</h1>

        <form ref={formRef} onSubmit={handleSubmit} className='flex gap-2 flex-col justify-start items-start bg-black  rounded !p-4 border-red-300 border  text-white'>
          
            <label htmlFor="name">Name</label>
            <input 
            // onChange={handleChange} 
            // value={formData.name}
             id="name" type="text" 
             name='name' 
             className='border rounded' />
            {/* //email */}
           <label htmlFor="emial">Email</label>
            <input 
            // onChange={handleChange} 
            id="emial" 
            // value={formData.email}
            type="email"
            name='email'
             className='border rounded' />
        <button type='submit' className='border bg-red-300 rounded !px-3 !py-2 '>submit</button>
        </form>
    </div>
  )
}

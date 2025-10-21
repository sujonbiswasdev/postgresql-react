import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
const app_url = 'http://localhost:3000/users'
function App() {
  const [user,setuser]=useState([])
  const [form,setform] = useState({name:"",message:""})

  const fathurl=async(e)=>{
    await axios.get(app_url).then((res)=>setuser(res.data))
  }

  useEffect(()=>{
    fathurl()
  },[])
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post(app_url,form)
    setform({name:"",message:""})
    fathurl()
  }

  return (
    <div className='max-w-[1280] mx-auto py-16 px-14'>
      <form onSubmit={handleSubmit} className='space-y-2'>
        <div className='space-x-2 space-y-1.5'>
          <label className='font-bold mb-4'>Name :</label> <br />
          <input placeholder='Enter your name' type="text" className='border border-indigo-600 rounded-lg px-2.5 py-1.5' name="name"
           value={form.name} 
           onChange={(e)=>setform({...form,name:e.target.value})} required/>
        </div>
        <div className='space-x-2 space-y-1.5'>
          <label htmlFor="" className='mb-2 font-bold'>Message : </label> <br />
          <textarea placeholder='Enter your description' className='border border-indigo-600 rounded-lg px-2.5 py-1.5 min-h-[60px]' type="text" name='message' 
          value={form.message} 
          onChange={(e)=>setform({...form, message:e.target.value})}  required/>
        </div>
        <button className='font-bold px-8 rounded-lg py-2 bg-pink-700 ' type='submit'>Add</button>
      </form>


{/* content section */}
      <div className='max-w-[410px] bg-white text-black py-8 px-10 rounded-lg mt-5'>
        <div className='flex items-center justify-between font-bold mb-2 text-xl border-b-2'>
          <div>name</div>
          <div>description</div>
        </div>
        {user.map((item,index)=>{
          return <div key={index} className='flex items-center justify-between'>
            <li>{item.name}</li>
            <div className='w-[2px] h-fit bg-amber-300'></div>
            <li>{item.message}</li>
          </div>
        })}
      </div>
    </div>
  )
}

export default App

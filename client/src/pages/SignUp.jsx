import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate()
  const hendelFormData = (e)=>{
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    });
  }

  const handelSubmit = async (e)=>{
    e.preventDefault()
    try {
        setLoding(true)
        const res = await fetch('http://localhost:9000/api/auth/signup', {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json();
        if(data.success === false){
          setError(data.message);
          setLoding(false);
          console.log(data)
          return;
        }
        setLoding(false)
        setError(null)
        console.log(data)
        navigate('/sign-in')
    } catch (error) {
      setError(error.message)
      setLoding(false)
    }

  }
  return (
    <div className='max-w-xl mx-auto p-3'>
      <h1 className='text-3xl font-bold text-slate-700 my-6 text-center'>Sign Up</h1>
      <form className='flex flex-col gap-5' onSubmit={handelSubmit}>
        <input type="text" id='username' className='border rounded-lg p-3' onChange={hendelFormData} placeholder='Enter your name'/>
        <input type="email" id='email' className='border rounded-lg p-3' onChange={hendelFormData} placeholder='Enter your email' />
        <input type="password" id='password' className='border rounded-lg p-3' onChange={hendelFormData} placeholder='Enter your password' />
        <button disabled={loding} className='border rounded-lg p-2 bg-slate-600 text-white text-xl font-semibold hover:opacity-90 disabled:opacity-80'>{loding ? 'Loding...':'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"} className='text-blue-700'>
          <span>Sign in</span>
        </Link>
      </div>
      <div className='text-lg text-red-700'>{error}</div>
    </div>
  )
}

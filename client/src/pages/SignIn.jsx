import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loding, error} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const hendelFormData = (e)=>{
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    });
  }

  const handelSubmit = async (e)=>{
    e.preventDefault()
    try {
        dispatch(signInStart())
        console.log(formData)
        const res = await fetch('http://localhost:9000/api/auth/signin', {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json();
        if(data.success === false){
          dispatch(signInFailure(data.message))
          return;
        }
        dispatch(signInSuccess(data))
        navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }

  }
  return (
    <div className='max-w-xl mx-auto p-3'>
      <h1 className='text-3xl font-bold text-slate-700 my-6 text-center'>Sign In</h1>
      <form className='flex flex-col gap-5' onSubmit={handelSubmit}>
        <input type="email" id='email' className='border rounded-lg p-3' onChange={hendelFormData} placeholder='Enter your email' />
        <input type="password" id='password' className='border rounded-lg p-3' onChange={hendelFormData} placeholder='Enter your password' />
        <button disabled={loding} className='border rounded-lg p-2 bg-slate-600 text-white text-xl font-semibold hover:opacity-90 disabled:opacity-80'>{loding ? 'Loding...':'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={"/sign-up"} className='text-blue-700'>
          <span>Sign up</span>
        </Link>
      </div>
      <div className='text-lg text-red-700'>{error}</div>
    </div>
  )
}

import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-sky-100 shadow-md'>
        <div className='flex justify-around items-center'>
            <h1 className='font-bold text-lg sm:text-2xl cursor-pointer'>
                <Link to='/'>
                    <span className='text-sky-800'>My</span>
                    <span className='text-sky-600'>Estate</span>
                </Link>
            </h1>
            <div className='flex justify-evenly h-8 sm:h-11 my-3 items-center shadow-sm bg-slate-100 w-1/3 rounded-md'>
                <input type="text" placeholder='Search...' className='bg-transparent outline-none text-slate-600 w-4/5'/>
                <FaSearch className='text-slate-600 text-lg cursor-pointer'/>
            </div>
            <div className='flex justify-evenly text-md lg:text-lg items-cente w-1/3 sm:w-3/12 text-slate-600'>
                <Link to='/'>
                    <span className='cursor-pointer hover:font-semibold'>Home</span>
                </Link>
                <Link to='/About'>
                    <span className='cursor-pointer hover:font-semibold'>About</span>
                </Link>
                <Link to='/Sign-in'>
                    <span className='cursor-pointer hover:font-semibold'>Sign In</span>
                </Link>
            </div>
        </div>
    </header>
  )
}

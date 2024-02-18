import React from 'react'
import logo from '../assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const {cart} = useSelector((state)=> state)
    return ( 
        <div className=' '>

            <nav className='flex w-[60vw] h-20 items-center mx-auto flex-row justify-between'>
                <NavLink to='/'>
                    <div className='ml-5'>
                        <img width={100} src={logo} />
                    </div>
                </NavLink>
                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink to='/'> <p>Home</p></NavLink>

                    <NavLink to='/cart'>
                        <div className='relative'>
                            <FaCartShopping  className='text-2xl'/>
                            {
                                cart.length > 0 &&
                                <span className='absolute -top-1 -right-2 bg-green-500 text-xs animate-bounce rounded-full text-white w-5 h-5 flex
                                items-center justify-center'>{cart.length}</span>
                            }
                           
                        </div>
                    </NavLink>

                </div>
            </nav>
        </div>
    )
}

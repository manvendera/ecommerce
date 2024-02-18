import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {add,remove} from '../redux/Slices/CartSlice'
export default function Product({ post }) {
    const {cart} = useSelector((state)=>state)
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false)

    const addToCart= () =>{
        dispatch(add(post));
        toast.success('Item added to cart')
    }
    const removeFromCart= () =>{
        dispatch(remove(post.id));
        toast.success ('Item removed from cart')
    }
    return (
        <div className=' rounded-sm flex felx-col  items-center justify-center hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 '>
            <div className=' '>
                <div>
                    <p className='text-gray-700 font-bold text-lg text-center truncate w-40 mt-1'>{post.title.split(' ').slice(0,2).join(' ') + '...'}</p>
                </div>
                <div>
                    <p className='w-40 text-gray-400 font-semibold text-[11px]  text-center mt-4'>{post.description.split(' ').slice(0,10).join(' ') + "..."}</p>
                </div>
                <div className='h-[180px] mt-8'>
                    <img className='h-full w-full' src={post.image} alt="" srcset="" />
                </div>
                <div className='flex justify-between gap-11 items-center w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold'>${post.price}</p>
                </div>
                <button>
                    {
                        cart.some((p)=>p.id === post.id) ? (
                            <p className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>Remove to cart</p>
                        ) : (
                            <p className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to Cart</p>
                        )
                    }
                </button>
                </div>
               
            </div>
        </div>
    ) 
}

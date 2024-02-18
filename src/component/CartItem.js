import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {remove} from '../redux/Slices/CartSlice'

export default function CartItem({item,itemIndex}) {
 const dispatch = useDispatch();
  const removeFromCart =() =>{
  dispatch(remove(item.id ))
  toast.success('item removed')
 }
  return (
    <div className='flex  '>
       <div>
        <img src={item.image} alt="" srcset="" />
       </div>
       <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
        </div>
        <div onClick={removeFromCart}>
          <FcDeleteDatabase></FcDeleteDatabase>
        </div>
       </div>
    </div>
  )
}

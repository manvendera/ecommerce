import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../component/CartItem'

export default function Cart() {
  const { cart } = useSelector((state) => state);
  // console.log('Printing Cart');
  // console.log(cart);
  const [totalAmount,settotalAmount] = useState(0)
  useEffect(()=>{
    settotalAmount(cart.reduce((acc,curr)=> acc + curr.price ,0));
  },[cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (<div>
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
            </div>
            <div>
              <div>Ypur Cart</div>
              <div>Summary</div>
              <p>
                <span>
                  TotalItems : {cart.length}
                </span>
              </p>
            </div>
            <div>
              <p>Total Amount : {totalAmount}</p>
            </div>
            </div>

          ) : (<div>
            your Cart is empty
            <NavLink to={'/'}> <button>Shop Now</button></NavLink>
          </div>)
      }
    </div>
  )
}

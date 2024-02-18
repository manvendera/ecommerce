import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Spinner from '../component/Spinner';
import Product from '../component/Product';

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  async function fetchData() {
    setLoading(true)
    try {
      const res =await fetch(API_URL)
      const data = await  res.json();

      setPosts(data)

    } catch (error) {
      toast.warning('something went wrong')
      setPosts([])
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {
        loading ?
          (<Spinner></Spinner>)
          :
          posts.length > 0?
          (
            <div className='grid gap-4 xs:grid-col-1  md:grid-cols-3  lg:grid-cols-4 max-w6xl p-2 mx-auto space-y-10 space-x-5 w-[70vw]'>{
              posts.map((post) => (
                // console.log(post)
                 <Product key={posts.id} post={post}> </Product>
              ))
              }
            </div>
          )
          :(
            <div className='flex justify-center items-center'>No data Found</div>
          )
      }

    </div>
  )
}

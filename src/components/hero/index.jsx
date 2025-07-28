import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../ui/popup'
import Skeleton from '../ui/loading'

const Hero = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading , setLoading] = useState(true)
  const [selectPro , setPro] = useState(null)
  const limit = 8 


useEffect(()=>{
  setLoading(true)
    axios
    .get('https://fakestoreapi.com/products',{params: {limit: limit}})
    .then((res)=>{
      setData(res.data)
    })
    .catch((err) =>{
      setError(err)
      console.log(err);
      
    })
    .finally(()=>{
      setLoading(false)


    })

},[])




  return (
    <div>

      {error && (
        <div>
          <img src="" alt="" />
          <p className="text-red-500 text-center">Something went wrong :(</p>
        </div>
      )}

       {loading && (
        <Skeleton count={limit}/>
      )} 

      <div className='container mx-auto grid grid-cols-4 gap-6'>
        {
          data?.map((product)=>(
            <div onClick={()=> setPro(product)} className='shadow-lg rounded-lg overflow-hidden' key={product.id}>
              <div className='rounded-lg overflow-hidden'>
                <img src={product.image} alt="" className=' w-full object-contain h-[330px] '/>
              </div>

              <div className='p-4'>
                <h2 title={product.title} className='font-bold line-clamp-1'>
                  {product.title}
                </h2>
                <p className='text-red-600'>${product.price}</p>
                <p className='text-blue-600'>⭐️ {product.rating.rate}</p>
                <p className='text-[#807777]'>count: {product.rating.count}</p>

              </div>

            </div>
          ))
        }

      </div>
      
      
        { selectPro && (
        <Popup  isShow={true} onClose={()=> setPro(null)}> 
        <div className=' flex justify-center items-center max-w-[90vw] h-[70vh]  bg-white p-4 rounded shadow'>
           <div className='rounded-lg overflow-hidden'>
                <img src={selectPro.image} alt="" className=' w-full object-contain h-[330px] '/>
              </div>

              <div className='p-4'>
                <h2 title={selectPro.title} className='font-bold '>
                  {selectPro.title}
                </h2>
                <p className='text-red-600'>${selectPro.price}</p>
                <p className='text-blue-600'>⭐️ {selectPro.rating.rate}</p>
                <p className='text-[#807777]'>count: {selectPro.rating.count}</p>

              </div>
        </div>
        </Popup>
        )
        }


    </div>
  )
}

export default Hero
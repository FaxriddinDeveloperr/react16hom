import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../ui/popup'
import Skeleton from '../ui/loading'

const Hero = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectPro, setPro] = useState(null)
  const limit = 8

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://fakestoreapi.com/products', { params: { limit } })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="px-4">
      {error && (
        <div>
          <p className="text-red-500 text-center">Something went wrong :(</p>
        </div>
      )}

      {loading && <Skeleton count={limit} />}

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            onClick={() => setPro(product)}
            className="bg-white  rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-full object-contain h-[300px] p-4"
              />
            </div>

            <div className="p-4">
              <h2 title={product.title} className="font-bold line-clamp-1">
                {product.title}
              </h2>
              <p className="text-red-600">${product.price}</p>
              <p className="text-blue-600">⭐️ {product.rating.rate}</p>
              <p className="text-[#807777]">count: {product.rating.count}</p>
            </div>
          </div>
        ))}
      </div>

      {selectPro && (
        <Popup isShow={true} onClose={() => setPro(null)}>
          <div className="flex flex-col md:flex-row justify-center items-center max-w-[90vw] h-[70vh] bg-white p-4 rounded ">
            <div className="rounded-lg overflow-hidden max-w-[300px]">
              <img
                src={selectPro.image}
                alt=""
                className="w-full object-contain h-[330px]"
              />
            </div>

            <div className="p-4 max-w-md">
              <h2 title={selectPro.title} className="font-bold text-lg">
                {selectPro.title}
              </h2>
              <p className="text-red-600">${selectPro.price}</p>
              <p className="text-blue-600">⭐️ {selectPro.rating.rate}</p>
              <p className="text-[#807777]">count: {selectPro.rating.count}</p>
            </div>
          </div>
        </Popup>
      )}
    </div>
  )
}

export default Hero

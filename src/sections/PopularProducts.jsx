import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experiencie premium quality and style with our handcrafted selection</p>
      </div>
      <div className='mt-16 gap-14 grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:max-lg:gap-8'>
        {
          products.map((product)=>(
            <PopularProductCard key={product.name} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts
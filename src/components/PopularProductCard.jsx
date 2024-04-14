import React from 'react'
import { star } from '../assets/icons'
const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full'>
        <img src={imgURL} alt={name} className='w-full h-full'/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" className='w-[24px] h-[24px]' />
            <p className='font-montserrat text-xl text-slate-gray leading-tight'>({rating})</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-bold font-palanquin'>{name}</h3>
        <p className='mt-2 text-coral-red text-l font-semibold font-montserrat leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard
import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold font-palanquin text-center'>What Our <span className='text-coral-red'>Custumers</span> Say</h3>
      <p className='m-auto mt-4 text-center info-text max-w-lg'>Hear genuine stories from out satisfied customers</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews
import React from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

function Hero() {
  return (
    <section id='home' className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='font-montserrat text-coral-red max-sm:text-xl text-2xl'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-4xl max-sm:leading-[60px] font-bold'>
          <span className='lg:bg-white relative z-10 lg:whitespace-nowrap pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm'>Discover stylish Nike arrivals. <br />
          Quality, comfort and innovation.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-sm:mt-8 max-sm:gap-8'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=' max-sm:text-2xl text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center bg-primary'>
        <img src={bigShoe1} alt="shoe collection" width={600} height={500} className="object-contain relative z-10"/>
        <div>
          {shoes.map((shoe) =>(
              <div key={shoe}>
                <ShoeCard 
                imgURL={shoe}
                changeBigShoeImg={()=>{}}
                bigShoeImg=""/>
              </div>
            ))

          }
        </div>
      </div>

    </section>
  )
}

export default Hero
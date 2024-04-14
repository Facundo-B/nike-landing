import React from 'react'

function Button({ label, iconURL }) {
  return (
    <button className='flex justify-center items-center gap-1 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
      {label}
      {iconURL && <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="arrow-right" />
      }

    </button>
  )
}

export default Button
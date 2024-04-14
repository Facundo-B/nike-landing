import React from 'react'

function Button({ label, iconURL, backgroundColor, textColor, borderColor }) {
  return (
    <button className={`flex justify-center items-center gap-1 px-7 py-4 font-montserrat text-lg leading-none rounded-full border
    ${backgroundColor ?  
      `${backgroundColor} ${textColor} ${borderColor}`
    : "bg-coral-red text-white border-coral-red"}`}>
      {label}
      {iconURL && <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="arrow-right" />
      }

    </button>
  )
}

export default Button
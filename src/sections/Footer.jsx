import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col intems-start'>
          <a href="/"><img src={footerLogo} alt="Nike" className='w-[150px] h-[46px] m-0' /></a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          <div className='flex items-center gap-6 mt-8'>
            {socialMedia.map((icon) => (
              <div key={icon.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-normal gap-20 lg:gap-10 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className=' cursor-pointer mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="Copyright" className='rounded-full m-0 w-[20px] h-[20px]'/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer

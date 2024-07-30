import React from 'react'
import Logo from '../assets/Jadesola.svg'
import send from '../assets/send.svg'



export const Nav = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <img src={Logo} alt="" />
        <ul className='flex items-center gap-6'>
            <li className='flex gap-1 items-center cursor-pointer hover:text-xl transform transition-transform duration-700 hover:scale-110'>Background <img src={send} alt="" /></li>
            <li className='flex gap-1 items-center cursor-pointer hover:text-xl transform transition-transform duration-700 hover:scale-110'>Experience <img src={send} alt="" /></li>
            <li className='flex gap-1 items-center cursor-pointer hover:text-xl transform transition-transform duration-700 hover:scale-110'>Projects <img src={send} alt="" /></li>
        </ul>

        <div className='flex gap-3'>
            <button className='border border-white rounded-[11px] px-[14px] py-[10px] cursor-pointer'><a href="/Users/jadesolaadeagbo/Desktop/Learning/Typescript/portfolio/public" target='blank'>Read CV</a></button>
            <button className='bg-customOrange rounded-[11px] px-[14px] py-[10px] cursor-pointer'>Hire Me</button>
        </div>

      </div>  
    </>

  )
}

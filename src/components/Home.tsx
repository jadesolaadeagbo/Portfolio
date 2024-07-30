import React from 'react'
import { Nav } from './Nav'

export const Home = () => {
  return (
    <div className='h-screen px-12 py-12 bg-custom-gradient text-white'>
        <Nav />

        <h1 className='text-8xl text-center pt-60 text-shadow font-bold bounce-animation'>Frontend Developer</h1>

        <div className='flex items-center justify-between font-thin pt-60'>
            <p className='w-1/2'>Transforming ideas into digital masterpieces. Crafting the future of web development with creativity and precision.</p>
            <p>Been cooking since 2021.</p>
        </div>
    </div>
  )
}

import React,{useState} from 'react'
import Folder from '../assets/folder.svg'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'

export const Projects = () => {
    const [blur, setBlur] = useState(false);
  return (
    <div className='bg-project-gradient p-20'>
        <div className='flex flex-col justify-center items-start h-[100%]'>
            <span className='bg-opaqueOrange text-white flex gap-2 px-3 py-2 rounded-md '><img src={Folder} alt="" />Projects</span>
            <p className='text-gray-400 font-sans leading-loose pt-10'>Step into a world of innovation and creativity through my portfolio. Each project is a unique blend of meticulous design and cutting-edge development, showcasing my dedication to crafting web experiences that are not only visually stunning but also intuitively functional. From concept to execution, explore how I bring ideas to life with precision and passion, pushing the boundaries of front-end development.</p>

            <div className='flex w-full flex-wrap gap-4 pt-20'>
                <div className='relative w-[calc(50%-10px)] '>
                    <img src={Project1} alt="" className='w-full rounded-md ' />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white cursor-pointer'>
                        <p className='absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100'>
                        Netflix Clone</p>
                    </div>
                </div>
                <div className='relative w-[calc(50%-10px)] '>
                    <img src={Project2} alt="" className='w-full rounded-md ' />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white cursor-pointer'>
                        <p className='absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100'>
                        Gab Taxi</p>
                    </div>
                </div>
                <div className='relative w-[calc(50%-10px)] '>
                    <img src={Project3} alt="" className='w-full rounded-md ' />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white cursor-pointer'>
                        <p className='absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100'>
                        Covid-19 tracker</p>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}
